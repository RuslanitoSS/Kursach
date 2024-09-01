from django.http import JsonResponse
from django.utils import timezone
from itertools import chain
from django.shortcuts import get_object_or_404
from api.models import Event, Project
from accounts.models import CustomUser
from api.utils import serialize_event_list, serialize_event_detail, serialize_project_list, serialize_project_detail
from api.utils import serialize_custom_users_list, serialize_custom_user
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ValidationError
import json

#events
def event_list(request):
    if request.method == 'GET':
        current_time = timezone.now() 

        upcoming_events = Event.objects.filter(start_date__gte=current_time).order_by('start_date')

        past_events = Event.objects.filter(start_date__lt=current_time).order_by('-start_date')

        events = list(chain(upcoming_events, past_events))

        serialized_events = [serialize_event_list(event) for event in events]
        return JsonResponse(serialized_events, safe=False)

def event_detail(request, pk):
    if request.method == 'GET':
        event = get_object_or_404(Event, pk=pk)
        serialized_event = serialize_event_detail(event)
        return JsonResponse(serialized_event)

    """ POST/DELETE """

#projects
def project_list(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        serialized_projects = [serialize_project_list(project) for project in projects]
        return JsonResponse(serialized_projects, safe=False)

def project_detail(request, pk):
    if request.method == 'GET':
        project = get_object_or_404(Project, pk=pk)
        serialized_project = serialize_project_detail(project)
        return JsonResponse(serialized_project)

#Создание преокта
@csrf_exempt  #Cross-Site Request Forgery (CSRF) отключаем для демонстрации
def project_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            name = data.get('name')
            description = data.get('description')
            short_description = data.get('short_description')
            participants_ids = data.get('participants', [])
            organizers_ids = data.get('organizers', [])

            if not name or not description or not short_description:
                return JsonResponse({'error': 'Обязательные поля не заполнены'}, status=400)

            project = Project.objects.create(
                name=name,
                description=description,
                short_description=short_description
            )

            if participants_ids:
                participants = CustomUser.objects.filter(id__in=participants_ids)
                project.participants.set(participants)

            if organizers_ids:
                organizers = CustomUser.objects.filter(id__in=organizers_ids)
                project.organizers.set(organizers)

            project.save()

            serialized_project = {
                'id': project.id,
            }

            return JsonResponse(serialized_project, status=201)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except ValidationError as e:
            return JsonResponse({'error': str(e)}, status=400)
        except Exception as e:
            return JsonResponse({'error': 'Something went wrong'}, status=500)
    else:
        return JsonResponse({'error': 'Invalid HTTP method'}, status=405)

@csrf_exempt
def project_update(request, project_id):
    if request.method == 'POST':
        # Получаем проект по ID или возвращаем 404, если он не найден
        project = get_object_or_404(Project, id=project_id)

        try:
            # Преобразуем JSON в Python-объект
            data = json.loads(request.body)

            # Обновляем поля проекта, если они присутствуют в запросе
            if 'name' in data:
                project.name = data['name']
            if 'description' in data:
                project.description = data['description']
            if 'short_description' in data:
                project.short_description = data['short_description']

            # Сохраняем изменения
            project.save()

            # Возвращаем обновленные данные проекта в формате JSON
            response_data = {
                'id': project.id,
            }
            return JsonResponse(response_data, status=200)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Неверный формат JSON'}, status=400)

    else:
        return JsonResponse({'error': 'Метод не разрешен'}, status=405)


@csrf_exempt
def project_delete(request, project_id):
    project = get_object_or_404(Project, id=project_id)

    if request.method == 'DELETE':
        project.delete()
        return JsonResponse({'message': 'Проект успешно удален.'}, status=200)
    
    return JsonResponse({'error': 'Метод не поддерживается.'}, status=405)
#accounts
def student_list(request):
    if request.method == 'GET':
        students = CustomUser.objects.filter(user_type='student')
        serialized_students = serialize_custom_users_list(students)
        return JsonResponse(serialized_students, safe=False)

def employee_list(request):
    if request.method == 'GET':
        employees = CustomUser.objects.filter(user_type='employee')
        serialized_employees = serialize_custom_users_list(employees)
        return JsonResponse(serialized_employees, safe=False)

def user_detail(request, user_id):
    if request.method == 'GET':
        user = get_object_or_404(CustomUser, id=user_id)
        serialized_user = serialize_custom_user(user)
        return JsonResponse(serialized_user)
    
    """ POST/DELETE """