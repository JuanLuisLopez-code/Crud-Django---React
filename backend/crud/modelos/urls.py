from django.urls import path
from .views import CategoriaView

app_name = "categoria"

urlpatterns = [
    path('categoria', CategoriaView.as_view()),
    path('categoria/<int:pk>', CategoriaView.as_view()),
]
