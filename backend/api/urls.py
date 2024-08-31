from django.urls import path
from api import views

urlpatterns = [
    path('events/', views.event_list, name='event-list'),
    path('events/<int:pk>/', views.event_detail, name='event-detail'),
    path('projects/', views.project_list, name='project-list'),
    path('projects/<int:pk>/', views.project_detail, name='project-detail'),
]
