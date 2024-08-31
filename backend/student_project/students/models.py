from django.db import models
from django.contrib.auth.models import AbstractUser
from accounts.models import CustomUser



class Event(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    short_description = models.CharField(max_length=255)
    address = models.CharField(max_length=255, blank=True, null=True)
    start_date = models.DateField(null=True)
    end_date = models.DateField(blank=True, null=True)
    participants = models.ManyToManyField(CustomUser, related_name='events')

    def __str__(self):
        return self.name

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    short_description = models.CharField(max_length=255)
    participants = models.ManyToManyField(CustomUser, related_name='projects')

    def __str__(self):
        return self.name

""" class Student(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255)
    university = models.CharField(max_length=255)
    email = models.EmailField(unique=True, null=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Staff(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255)
    workplace = models.CharField(max_length=255)
    email = models.EmailField(unique=True, null=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.first_name} {self.last_name}" """



""" 
Вместо M2M полей хотел использовать отдельные модели

class Participation(models.Model):
    id = models.AutoField(primary_key=True)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, blank=True, null=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

class Organization(models.Model):
    id = models.AutoField(primary_key=True)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, blank=True, null=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True) 
    
"""