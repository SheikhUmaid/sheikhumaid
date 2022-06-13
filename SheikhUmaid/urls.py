from django.urls import path
from SheikhUmaid import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',views.index,name='index'),
    path('contact',views.contact,name='contact'),
    path('projects',views.projects,name='projects'),
    path('project/<pk>',views.project,name='project')
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
