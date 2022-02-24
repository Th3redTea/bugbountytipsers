from xml.etree.ElementInclude import include
from django.urls import path
from rest_framework import viewsets
from rest_framework.routers import DefaultRouter
# from .views import  ListView


router = DefaultRouter()
# router.register(r'user', ListView, basename='user')


urlpatterns = [
    # path('user/', ListView.as_view({'get': 'list'}), name='List user'),
    
]

urlpatterns += router.urls
