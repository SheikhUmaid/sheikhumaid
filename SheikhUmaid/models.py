from django.db import models

# Create your models here.


class Project(models.Model):

    Name = models.CharField(default='', max_length=50)
    Role = models.CharField(default='', max_length=50)
    Year = models.IntegerField(default=20)
    Client = models.CharField(default='', max_length=50)
    ContentType = models.CharField(default='Static', max_length=30)
    URL = models.CharField(max_length=100)
    GithubLink = models.CharField(max_length=100)
    Description = models.TextField(max_length=500)
    TechUsed = models.CharField(default='', max_length=200)
    Image = models.CharField(default='', max_length = 200)


    def __str__(self):
        return self.Name
    
