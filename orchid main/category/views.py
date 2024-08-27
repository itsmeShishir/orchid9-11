from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializer import *
# Create your views here.
#class Based Views
class Category(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = categorySerializer
