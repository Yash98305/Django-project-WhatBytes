from django.contrib.auth.forms import UserChangeForm,UserCreationForm
from .models import User

class customUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = User
        fields = ['username','email']
        error_class = "error"


        
class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm):
        model = User
        fields = ['username','email']
        error_class = "error"