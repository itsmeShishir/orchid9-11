from django.urls import path
from .views import *
urlpatterns = [
    path('allCategory', Category.as_view(), 
        name='allCategory'),
    path('udCategory/<int:pk>', UpdateDelete.as_view(), 
        name='udCategory'),
]