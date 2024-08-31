from django.utils import timezone
from accounts.models import CustomUser  # Замените 'myapp' на название вашего приложения
import random

# Список имен и фамилий
first_names = [
    'Александр', 'Мария', 'Ольга', 'Дмитрий', 'Елена', 'Сергей', 'Наталья', 'Иван', 'Анна', 'Татьяна',
    'Михаил', 'Ирина', 'Юлия', 'Андрей', 'Алексей', 'Виктор', 'Светлана', 'Павел', 'Владимир', 'Екатерина'
]
last_names = [
    'Иванов', 'Смирнова', 'Кузнецова', 'Попова', 'Соколова', 'Лебедев', 'Козлова', 'Новиков', 'Морозова', 'Петров',
    'Волкова', 'Соловьёв', 'Васильев', 'Зайцева', 'Павлов', 'Семенов', 'Голубева', 'Виноградов', 'Богданов', 'Воронов'
]

# Европейские имена и фамилии на русском
european_first_names = ['Оливия', 'Лукас', 'Мартин', 'Амелия']
european_last_names = ['Шмидт', 'Мюллер', 'Фишер', 'Вебер']

# Генерация пользователей с user_type = 'Student'
for i in range(10):
    first_name = random.choice(first_names + european_first_names)
    last_name = random.choice(last_names + european_last_names)
    email = f"{first_name.lower()}.{last_name.lower()}@example.com"
    
    user = CustomUser(
        email=email,
        first_name=first_name,
        last_name=last_name,
        is_active=True,
        is_staff=False,
        date_joined=timezone.now(),
        gender=random.choice(['M', 'F', 'O']),
        user_type='student',
        university_name='Московский государственный университет',
        workplace=None
    )
    user.set_password('password123')  # Установить пароль
    user.save()

# Генерация пользователей с user_type = 'Employee'
for i in range(10):
    first_name = random.choice(first_names + european_first_names)
    last_name = random.choice(last_names + european_last_names)
    email = f"{first_name.lower()}.{last_name.lower()}@example.com"
    
    user = CustomUser(
        email=email,
        first_name=first_name,
        last_name=last_name,
        is_active=True,
        is_staff=False,
        date_joined=timezone.now(),
        gender=random.choice(['M', 'F', 'O']),
        user_type='employee',
        university_name=None,
        workplace='Компания Рога и Копыта'
    )
    user.set_password('password123')  # Установить пароль
    user.save()
