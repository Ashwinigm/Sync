from django.views.generic import TemplateView, ListView
from django.db.models import Q
from searchapp import models

from .models import Rooms
from .forms import AddRoomsForm
from django.shortcuts import render


class HomePageView(TemplateView):
    template_name = 'home.html'

# class SearchResultsView(ListView):
#     model = Rooms
#     template_name = 'search_results.html'
#     queryset = Rooms.objects.filter(room_name__icontains='Two')
#
#     def get_queryset(self):  # new
#         return Rooms.objects.filter(name__icontains='Two')

# class SearchResultsView(ListView):
#     model = Rooms
#     template_name = 'search_results.html'
#
#     def get_queryset(self): # new
#         return Rooms.objects.filter(
#             Q(room_name__icontains='Two') | Q(genre__icontains='Rock')
#         )

class SearchResultsView(ListView):
    model = Rooms
    template_name = 'search_results.html'

    def get_queryset(self): # new
        query = self.request.GET.get('q')
        object_list = Rooms.objects.filter(
            Q(room_name__icontains=query) | Q(genre__icontains=query)
        )

        return object_list


class SearchByName(TemplateView):
    template_name = 'searchbyname.html'


class SearchByGenre(TemplateView):
    template_name = 'searchbygenre.html'


class SearchByNameView(ListView):
    model = Rooms
    template_name = 'searchbyname_view.html'

    def get_queryset(self): # new
        query = self.request.GET.get('q')
        object_list = Rooms.objects.filter(
            Q(room_name__icontains=query)
        )
        return object_list


class SearchByGenreView(ListView):
    model = Rooms
    template_name = 'searchbygenre_view.html'

    def get_queryset(self):  # new
        query = self.request.GET.get('q')
        object_list = Rooms.objects.filter(
            Q(genre__icontains=query)
        )
        return object_list


def add_room(request):
    if request.method=="POST":
        if 'r_name' in request.POST:
            name = request.POST['r_name']
        else:
            name = False

        if 'r_genre' in request.POST:
            genre = request.POST['r_genre']
        else:
            genre = False
        ins = Rooms(room_name=name, genre=genre)
        ins.save()
        print("Saved to db")
    return render(request,'add_room.html')

class add_confirmation(TemplateView):
    template_name = 'add_confirmation.html'