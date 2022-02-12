from django.urls import path

from .views import CreateUserView, ListView, LoginView
# from rest_framework.authtoken import views

urlpatterns = [
    path('users/', CreateUserView.as_view(), name="Create user"),
    path('all/', ListView.as_view(), name='all users'),
    path('login/', LoginView.as_view(), name="login")
]
