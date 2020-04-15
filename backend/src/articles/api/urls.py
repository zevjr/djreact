from django.urls import path
from .views import ArticleListView, ArticleDatailView

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('<pk>', ArticleDatailView.as_view()),
]