from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _

from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'user_type', 'university_name', 'workplace')

    search_fields = ('email', 'first_name', 'last_name', 'user_type')

    list_filter = ('user_type',  'is_active', 'gender', 'is_staff', 'is_superuser',)

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'middle_name', 'last_name', 'gender', 'user_type', 'university_name', 'workplace')}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    ordering = ('email',)

    add_form_template = None

admin.site.register(CustomUser, CustomUserAdmin)
