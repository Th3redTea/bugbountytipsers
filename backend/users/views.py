from rest_framework import viewsets
from rest_framework import status
from django.shortcuts import get_object_or_404, render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth import authenticate
from users.models import UserProfile
from .serializers import UserCreateSerializer
from users import serializers
# Create your views here.




# class ListView(APIView):
#     authentication_classes = (TokenAuthentication,)
#     permission_classes = (IsAuthenticated,)

#     def get(self, request, pk):
#         # queryset =  UserProfile.objects.all()
#         user = get_object_or_404(UserProfile, pk=pk)
#         name = UserCreateSerializer(user).data['name'] 
#         pk = UserCreateSerializer(user).data['pk'] 
#         data = {'id': pk, 'name': name}
#         # names = [user.email for user in UserProfile.objects.filter(pk=pk)]

#         return Response(data)


class ListView(viewsets.ModelViewSet):
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def list(self, request):
        queryset = UserProfile.objects.all()
        serializer = UserCreateSerializer(queryset, many=True)
        return Response(serializer.data)


    def retrieve(self, request, pk=None):
        queryset = UserProfile.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserCreateSerializer(user)
        return Response(serializer.data)

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
