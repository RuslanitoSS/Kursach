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
    list_display = ('name', 'start_date', 'end_date', 'address', 'short_description_preview')
    search_fields = ('name', 'description', 'short_description')
    list_filter = ('start_date', 'end_date', 'organizers')
    inlines = [ParticipantsInline, OrganizersInline]
    filter_horizontal = ('participants', 'organizers')
    date_hierarchy = 'start_date'
    list_display_links = ('name', 'start_date')
    raw_id_fields = ('participants', 'organizers')
    readonly_fields = ('address',)  #Только ради readonly_fields. а так должно быть writable
    search_fields = ('name', 'description', 'short_description')

    @admin.display(description='Short Description Preview')
    def short_description_preview(self, obj):
        return obj.short_description[:50]  

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.prefetch_related('organizers', 'participants')  


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
    list_display = ('name', 'short_description_preview')
    search_fields = ('name', 'description', 'short_description')
    list_filter = ('organizers',)  
    inlines = [ProjectParticipantsInline, ProjectOrganizersInline]
    filter_horizontal = ('participants', 'organizers')
    list_display_links = ('name',)
    raw_id_fields = ('participants', 'organizers')
    readonly_fields = ('description',)  #Только ради readonly_fields. а так должно быть writable

    @admin.display(description='Short Description Preview')
    def short_description_preview(self, obj):
        return obj.short_description[:50] 

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.prefetch_related('organizers', 'participants')
