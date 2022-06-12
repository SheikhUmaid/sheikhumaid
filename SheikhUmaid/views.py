from django.shortcuts import render
from SheikhUmaid.models import Project
from math import ceil
# Create your views here.



def Page404Handler(request,*args,**kwargs):
    response = render(request,'404.html')
    response.status_code = 404
    return response

def index(request):
    if request.method == "POST":
        name = request.POST.get("form-name")
        email = request.POST.get("form-email")
        phone = request.POST.get("form-phone")
        message = request.POST.get("form-message")
        print(f"name: {name} email: {email} phone: {phone} message: {message}")
    return render(request, "index.html")

def contact(request):
    print(request.POST)
    if request.method == "POST":
        name = request.POST.get("form-name")
        email = request.POST.get("form-email")
        phone = request.POST.get("form-phone")
        message = request.POST.get("form-message")
        print(f"name: {name} email: {email} phone: {phone} message: {message}")
    return render(request, "contact.html")


def projects(request):
    projects = Project.objects.all()
    print(projects)
    n =len(projects)
    nRows = n//2+ceil((n/2)-(n//2))
    parameters = {"projects": projects, "no_of_rows":nRows}
    return render(request, "project_list.html",parameters)

def project(request,pk):
    project = Project.objects.get(pk=pk)
    tech_used = project.TechUsed
    tech_used = tech_used.split(" ")
    print(tech_used)
    n = len(tech_used)
    nRows = n//3+ceil((n/3)-(n//3))
    parameters = {"project": project,"techs":tech_used}
    return render(request, "project.html",parameters)