from rest_framework import serializers
from .models import *

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        #fields = ['id', 'title', 'description', 'img']



