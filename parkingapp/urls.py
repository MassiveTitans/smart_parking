from django.urls import path
from .views import  HomePage , login_register , dashboard




urlpatterns = [
    path("" , HomePage.as_view() , name= "home"),
    path('login/', login_register, name='login'),
    path('dashboard/', dashboard, name='dashboard'),

]