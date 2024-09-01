import json
from django.http import JsonResponse
from api.models import Event, Project
from accounts.models import CustomUser  
#GET запросы
#Общий для events и projects

#projects
def serialize_project_list(project):

    def serialize_custom_user(user):
        return {
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }

    return {
        'id': project.id,
        'name': project.name,
        'short_description': project.short_description,
        'organizers': [serialize_custom_user(u) for u in project.organizers.all()]
    }

def serialize_project_detail(project):
        
    def serialize_custom_user(user):
        return {
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }
        
    return {
        'name': project.name,
        'description': project.description,
        'short_description': project.short_description,
        'organizers': [serialize_custom_user(u) for u in project.organizers.all()],
        'participants': [serialize_custom_user(u) for u in project.participants.all()],
    }

#events
def serialize_event_list(event):

    def serialize_custom_user(user):
        return {
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }

    return {
        'id': event.id,
        'name': event.name,
        'short_description': event.short_description,
        'start_date': event.start_date,
        'end_date': event.end_date,
        'organizers': [serialize_custom_user(u) for u in event.organizers.all()],
    }

def serialize_event_detail(event):
    
    def serialize_custom_user(user):
        return {
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }

    return {
        'name': event.name,
        'description': event.description,
        'short_description': event.short_description,
        'organizers': [serialize_custom_user(u) for u in event.organizers.all()],
        'participants': [serialize_custom_user(u) for u in event.participants.all()],
        'address': event.address,
        'start_date': event.start_date,
        'end_date': event.end_date,
    }

#Users

def serialize_custom_users_list(users):

    def serialize_custom_user(user):
        return {
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'middle_name': user.middle_name,
            'gender': user.gender,
            'university_name': user.university_name,
            'workplace': user.workplace,
        }

    return [serialize_custom_user(user) for user in users]


def serialize_custom_user(user):

    def serialize_project(project):
        return {
            'id': project.id,
            'name': project.name,
            'description': project.description,
            'short_description': project.short_description
        }

    def serialize_projects(projects):
        return [serialize_project(project) for project in projects]
    
    def serialize_event(event):
        return {
            'id': event.id,
            'name': event.name,
            'description': event.description,
            'short_description': event.short_description,
            'address': event.address,
            'start_date': event.start_date,
            'end_date': event.end_date
        }
    
    def serialize_events(events):
        return [serialize_event(event) for event in events]
    
    def serialize_organization(projects, events):
        return {
            'projects': serialize_projects(projects),
            'events': serialize_events(events)
        }

    return {
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'middle_name': user.middle_name,
        'gender': user.gender,
        'user_type': user.user_type,
        'university_name': user.university_name,
        'workplace': user.workplace,
        'projects': serialize_projects(user.projects_participations.all()),
        'events': serialize_events(user.events_participations.all()),
        'organization': serialize_organization(user.projects_organizations.all(), user.events_organizations.all())
    }

