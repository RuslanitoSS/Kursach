from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.response import Response

#я использую Django REST framework потому что он даёт более удобный и комфортных способ создания
#методов в качесве viewset'а 




class StudentViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        student = self.queryset.get(pk=pk)
        serializer = self.serializer_class(student)
        return Response(serializer.data)

    def update(self, request, pk=None):
        student = self.queryset.get(pk=pk)
        serializer = self.serializer_class(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        student = self.queryset.get(pk=pk)
        student.delete()
        return Response(status=204)

class EventViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        event = self.queryset.get(pk=pk)
        serializer = self.serializer_class(event)
        return Response(serializer.data)

    def update(self, request, pk=None):
        event = self.queryset.get(pk=pk)
        serializer = self.serializer_class(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        event = self.queryset.get(pk=pk)
        event.delete()
        return Response(status=204)

class ProjectViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project)
        return Response(serializer.data)

    def update(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        project.delete()
        return Response(status=204)

class ParticipationViewset(viewsets.ViewSet):
    
    permission_classes = [permissions.AllowAny]
    queryset = Participation.objects.all()
    serializer_class = ParticipationSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        participation = self.queryset.get(pk=pk)
        serializer = self.serializer_class(participation)
        return Response(serializer.data)

    def update(self, request, pk=None):
        participation = self.queryset.get(pk=pk)
        serializer = self.serializer_class(participation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        participation = self.queryset.get(pk=pk)
        participation.delete()
        return Response(status=204)
    

class EmployeeViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        employee = self.queryset.get(pk=pk)
        serializer = self.serializer_class(employee)
        return Response(serializer.data)

    def update(self, request, pk=None):
        employee = self.queryset.get(pk=pk)
        serializer = self.serializer_class(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        employee = self.queryset.get(pk=pk)
        employee.delete()
        return Response(status=204)

class OrganizationViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        organization = self.queryset.get(pk=pk)
        serializer = self.serializer_class(organization)
        return Response(serializer.data)

    def update(self, request, pk=None):
        organization = self.queryset.get(pk=pk)
        serializer = self.serializer_class(organization, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        organization = self.queryset.get(pk=pk)
        organization.delete()
        return Response(status=204)