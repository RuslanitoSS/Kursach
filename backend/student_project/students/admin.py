# students/admin.py
from django.contrib import admin
from .models import Student, Staff, Event, Project

admin.site.register(Student)
admin.site.register(Staff)
admin.site.register(Event)
admin.site.register(Project)
