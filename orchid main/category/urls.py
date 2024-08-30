from django.urls import path
from .views import *
urlpatterns = [
    path('allCategory', Categorys.as_view(), 
        name='allCategory'),
    path('udCategory/<int:pk>', UpdateDelete.as_view(), 
        name='udCategory'),
    path("loginapi", LoginView.as_view(), name="loginapi")
]