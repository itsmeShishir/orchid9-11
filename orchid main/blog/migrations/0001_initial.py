# Generated by Django 5.0.7 on 2024-07-30 04:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('img', models.ImageField(blank=True, null=True, upload_to='blog/')),
                ('category', models.CharField(blank=True, max_length=40, null=True)),
                ('username', models.CharField(blank=True, max_length=40, null=True)),
            ],
        ),
    ]
