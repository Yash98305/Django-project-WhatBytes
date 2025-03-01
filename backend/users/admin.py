from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm,CustomUserCreationForm
from .models import User
# Register your models here.
class UserAdmin(BaseUserAdmin):
    ordering = ["email"]
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ["email", "username",'date_joined', 'last_login',  "is_active"]
    list_display_links = ["email"]
    list_filter = ["email", "username", "is_active"]
    search_fields = ["email", "username"]
    fieldsets = (
       (
            _("Login Credentials"),
            {
                "fields": ("email","password",)
            },
        ),
        (
            _("Personal Information"),
            {
                "fields": ("username",)
            },
        ),
        (
            _("Permissions and Groups"),
            {
                "fields": ("is_staff", "is_active", "is_superuser","groups","user_permissions",)
            },
        ),
        
    )
    add_fieldsets = (
        (
            None, {
                'classes': ('wide',),
                'fields': ('email', 'username', 'password1', 'password2',"is_staff", "is_active",),
            },
        ),
    )
    
admin.site.register(User,UserAdmin)