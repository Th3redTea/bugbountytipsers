from rest_framework import viewsets
from rest_framework import status
from rest_framework.authentication import BasicAuthentication, SessionAuthentication, TokenAuthentication
from django.shortcuts import get_object_or_404, render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser, IsAuthenticatedOrReadOnly
from django.contrib.auth import authenticate
from users.models import UserProfile
from .serializers import UserCreateSerializer
from users import serializers
from django.contrib.auth import authenticate, login, logout

# Create your views here.




#! It lists all users so it's
# class ListView(viewsets.ModelViewSet):
#     authentication_classes = (TokenAuthentication,  )
#     permission_classes = (IsAuthenticated,)

#     def list(self, request, pk=None):
#         queryset = UserProfile.objects.filter(pk=pk)
#         serializer = UserCreateSerializer(queryset)
#         return Response(serializer.data)


#     def retrieve(self, request, pk=None):
#         queryset = UserProfile.objects.all()
#         user = get_object_or_404(queryset, pk=pk)
#         serializer = UserCreateSerializer(user)
#         return Response(serializer.data)



# class LoginView(APIView):
#     permission_classes = (AllowAny,)
    
#     def post(self, request,):
#         email = request.data.get('email')
#         password = request.data.get('password')

#         user = authenticate(email=email, password=password)

#         if user is not None:
#             login(request, user)
#             return Response({"token": user.auth_token.key})
#         else:
#             return Response({"error": "Wrong Credentials"}, status=status.HTTP_400_BAD_REQUEST) 

