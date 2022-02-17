import email
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import UserProfile


class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = ['name', 'email', 'password', 'pk']
        extra_kwargs = {'password': {'write_only': True}}    
        

    def create(self, validated_data):
        user = UserProfile(email=validated_data['email'], name=validated_data['name'])   
        user.set_password(validated_data['password']) 

        user.save()
        Token.objects.create(user=user)

        return user

    