from django.contrib import admin
from SheikhUmaid.models import Project
from django.contrib.auth.models import Group

# Register your models here.
admin.site.unregister(Group)
admin.site.register(Project)
admin.site.site_header = 'PORTFOLIO ADMINISTRATION'
admin.site.index_title = 'APPLICTIONS AMINISTRATION'
admin.site.site_title = 'HTML title from adminsitration'