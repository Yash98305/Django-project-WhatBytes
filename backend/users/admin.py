from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm,customUserCreationForm
from .models import User
# Register your models here.
class UserAdmin(BaseUserAdmin):
    ordering = ["email"]
    add_form = customUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ["email", "username", "is_staff", "is_active"]
    list_display_links = ["email"]
    list_filter = ["email", "username", "is_staff", "is_active"]
    search_fields = ["email", "username"]

admin.site.register(User,UserAdmin)