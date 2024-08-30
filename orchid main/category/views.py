from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import  APIView
from django.contrib.auth import authenticate, login, logout
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *
from .serializer import *
# Create your views here.
#class Based Views
class Categorys(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = categorySerializer

class UpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = categorySerializer


class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            })
        return Response({"error": "Invalid Credentials"}, status=status.HTTP_400_BAD_REQUEST)