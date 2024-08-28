from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import *

def student_list(request):
    students = Student.objects.all().values('id', 'first_name', 'middle_name', 'last_name', 'university', 'course')
    return JsonResponse(list(students), safe=False)

def student_detail(request, student_id):
    student = get_object_or_404(Student, pk=student_id)
    projects = student.projects.all().values('id', 'name', 'short_description')
    events = student.events.all().values('id', 'name', 'short_description', 'start_date', 'end_date')
    response_data = {
        'first_name': student.first_name,
        'middle_name': student.middle_name,
        'last_name': student.last_name,
        'university': student.university,
        'course': student.course,
        'projects': list(projects),
        'events': list(events),
    }

    return JsonResponse(response_data)
