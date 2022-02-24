from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from .managers import UserProfileManager
# Create your models here.

class UserProfile(AbstractUser, PermissionsMixin ):
    username = None
    email = models.EmailField('Email', unique=True)
    name = models.CharField(max_length=120)
    bio = models.TextField(default="No bio")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    password2 = models.CharField(max_length=120, blank=True)

    objects = UserProfileManager()


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    
    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name


    def __str__(self):
        return self.email