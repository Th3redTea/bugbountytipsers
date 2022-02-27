from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import UserProfile
from rest_framework.response import Response
from rest_framework import status



class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = ['name', 'email', 'password', 'password2' , 'pk']
        extra_kwargs = {'password': {'write_only': True}}    
        

    def save(self, request):
        user = UserProfile(email=self.validated_data['email'], name=self.validated_data['name'])   
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        

        if password != password2:
            raise serializers.ValidationError({'password': "Passwords doesn\'t match"})
        user.set_password(password)
        if user is not None:
            user.save()
        return user






class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['name', 'pk']

