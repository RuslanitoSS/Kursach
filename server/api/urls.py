from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('student',StudentViewset, basename="student")
router.register(r'events', EventViewset, basename='events')
router.register(r'projects', ProjectViewset, basename='projects')
router.register(r'participations', ParticipationViewset, basename='participations')
router.register(r'employees', EmployeeViewset, basename='employees')
router.register(r'organizations', OrganizationViewset, basename='organizations')
urlpatterns = router.urls
 



""" urlpatterns = [
    path('', home)
]
 """