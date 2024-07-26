from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer, UserSerializer, UserCreatePasswordRetypeSerializer
User = get_user_model()

class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'username', 'date_joined', 'last_login', 'password']

    def create(self, validated_data):
        user = super().create(validated_data)
        user.is_active = True 
        user.save()
        return user

class CustomUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = User
        fields = ['id', 'email', 'username', 'date_joined', 'last_login']


class CustomSetPasswordSerializer(UserCreatePasswordRetypeSerializer):
    class Meta(UserCreatePasswordRetypeSerializer.Meta):
        fields = ['current_password', 'new_password']