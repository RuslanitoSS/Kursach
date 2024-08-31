import json
from django.http import JsonResponse
from api.models import Event, Project
from accounts.models import CustomUser


def serialize_custom_user(user):
    return {
        'id': user.id,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'user_type': user.user_type
    }

def serialize_event(event):
    return {
        'id': event.id,
        'name': event.name,
        'description': event.description,
        'short_description': event.short_description,
        'address': event.address,
        'start_date': event.start_date,
        'end_date': event.end_date,
        'organizers': [serialize_custom_user(u) for u in event.organizers.all()],
        'participants': [serialize_custom_user(u) for u in event.participants.all()],
    }

def serialize_project(project):
    return {
        'id': project.id,
        'name': project.name,
        'description': project.description,
        'short_description': project.short_description,
        'organizers': [serialize_custom_user(u) for u in project.organizers.all()],
        'participants': [serialize_custom_user(u) for u in project.participants.all()],
    }
