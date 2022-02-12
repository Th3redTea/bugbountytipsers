from inspect import isasyncgenfunction
from rest_framework import status
from django.shortcuts import get_object_or_404, render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import authenticate

from users.models import UserProfile
from .serializers import UserCreateSerializer
# Create your views here.




class ListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset =  UserProfile.objects.all()
    serializer_class = UserCreateSerializer


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserCreateSerializer



class LoginView(APIView):

    def post(self, request,):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user:
            return Response({"token": user.auth_token.key})
        else:
            return Response({"error": "Wrong Credentials"}, status=status.HTTP_400_BAD_REQUEST)
