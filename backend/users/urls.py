from xml.etree.ElementInclude import include
from django.urls import path
from rest_framework import viewsets
from rest_framework.routers import DefaultRouter
from .views import CreateUserView, ListView, LoginView
# from rest_framework.authtoken import views


router = DefaultRouter()
router.register(r'user', ListView, basename='user')


urlpatterns = [
    path('user/', ListView.as_view({'get': 'list'}), name='List user'),
    path('login/', LoginView.as_view(), name="login"),

]

urlpatterns += router.urls
