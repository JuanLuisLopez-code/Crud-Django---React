from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Categoria
from .serializers import CategoriaSerializer


class CategoriaView(APIView):
    def get(self, request, pk=None):
        if pk:
            show_categoria = get_object_or_404(Categoria.objects.all(), pk=pk)
            serializer = CategoriaSerializer(show_categoria)
            return Response({"Categorias": serializer.data})
        categorias = Categoria.objects.all()
        serializer = CategoriaSerializer(categorias, many=True)
        return Response({"Categorias": serializer.data})

    def post(self, request):
        new_categoria = request.data.get('categoria')
        serializer = CategoriaSerializer(data=new_categoria)
        if serializer.is_valid(raise_exception=True):
            new_categoria_saved = serializer.save()
        return Response({"success": "Categoria '{}' created successfully".format(new_categoria_saved.name)})

    def put(self, request, pk):
        saved_categoria = get_object_or_404(Categoria.objects.all(), pk=pk)
        data = request.data.get('categoria')
        serializer = CategoriaSerializer(instance=saved_categoria, data=data)

        if serializer.is_valid(raise_exception=True):
            update_categoria_saved = serializer.save()
        return Response({"success": "Categoria '{}' updated successfully".format(update_categoria_saved.name)})

    def delete(self, request, pk):
        search_categoria = get_object_or_404(Categoria.objects.all(), pk=pk)
        search_categoria.delete()
        return Response({"success": "Categoria '{}' removed successfully".format(search_categoria.name)})
