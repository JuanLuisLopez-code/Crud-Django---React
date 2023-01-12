from rest_framework import serializers 
from crud.modelos.models import Categoria
 
 
class CategoriaSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Categoria
        fields = ['id','name']
