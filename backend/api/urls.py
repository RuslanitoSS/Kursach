from django.urls import path
from api import views

urlpatterns = [
    path('events/', views.event_list, name='event-list'),
    path('events/<int:pk>/', views.event_detail, name='event-detail'),
    path('projects/', views.project_list, name='project-list'),
    path('projects/<int:pk>/', views.project_detail, name='project-detail'),
    path('projects/create/', views.project_create, name='project-create'),
    path('projects/<int:project_id>/update/', views.project_update, name='project_update'),
    path('projects/<int:project_id>/delete/', views.project_delete, name='project_delete'),
    path('students/', views.student_list, name='student-list'),
    path('employees/', views.employee_list, name='employee-list'),
    path('users/<int:user_id>/', views.user_detail, name='user-detail'),

]
