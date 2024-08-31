from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from api.models import Event, Project
from api.utils import serialize_event, serialize_project

def event_list(request):
    if request.method == 'GET':
        events = Event.objects.all()
        serialized_events = [serialize_event(event) for event in events]
        return JsonResponse(serialized_events, safe=False)

def event_detail(request, pk):
    if request.method == 'GET':
        event = get_object_or_404(Event, pk=pk)
        serialized_event = serialize_event(event)
        return JsonResponse(serialized_event)

def project_list(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        serialized_projects = [serialize_project(project) for project in projects]
        return JsonResponse(serialized_projects, safe=False)

def project_detail(request, pk):
    if request.method == 'GET':
        project = get_object_or_404(Project, pk=pk)
        serialized_project = serialize_project(project)
        return JsonResponse(serialized_project)
