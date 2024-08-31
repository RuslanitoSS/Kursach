from django.contrib import admin
from .models import Event, Project

class ParticipantsInline(admin.TabularInline):
    model = Event.participants.through
    extra = 1
    verbose_name = "Participant"
    verbose_name_plural = "Participants"


class OrganizersInline(admin.TabularInline):
    model = Event.organizers.through
    extra = 1
    verbose_name = "Organizer"
    verbose_name_plural = "Organizers"


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'start_date', 'end_date', 'address')
    search_fields = ('name', 'description', 'short_description')
    list_filter = ('start_date', 'end_date', 'organizers')
    inlines = [ParticipantsInline, OrganizersInline]
    filter_horizontal = ('participants', 'organizers')

    fieldsets = (
        (None, {
            'fields': ('name', 'short_description', 'description', 'address', 'start_date', 'end_date')
        }),
        ('Related Users', {
            'fields': ('participants', 'organizers')
        }),
    )


class ProjectParticipantsInline(admin.TabularInline):
    model = Project.participants.through
    extra = 1
    verbose_name = "Participant"
    verbose_name_plural = "Participants"


class ProjectOrganizersInline(admin.TabularInline):
    model = Project.organizers.through
    extra = 1
    verbose_name = "Organizer"
    verbose_name_plural = "Organizers"


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name', 'description', 'short_description')
    inlines = [ProjectParticipantsInline, ProjectOrganizersInline]
    filter_horizontal = ('participants', 'organizers')

    fieldsets = (
        (None, {
            'fields': ('name', 'short_description', 'description')
        }),
        ('Related Users', {
            'fields': ('participants', 'organizers')
        }),
    )

