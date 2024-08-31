from datetime import date, timedelta
from api.models import Event, Project  # Замените 'myapp' на название вашего приложения
import random

# Примеры данных для создания событий и проектов
event_names = [
    "Конференция по искусственному интеллекту",
    "Встреча выпускников 2024",
    "Международный форум по робототехнике",
    "Семинар по биотехнологиям",
    "Концерт классической музыки",
    "Фестиваль уличной еды",
    "Выставка современного искусства",
    "Книжная ярмарка",
    "Научная конференция по физике",
    "Бизнес-форум по стартапам"
]

project_names = [
    "Разработка приложения для учета времени",
    "Создание образовательной платформы",
    "Исследование искусственного интеллекта",
    "Проект экологического мониторинга",
    "Создание системы умного дома",
    "Проект автоматизации процессов",
    "Разработка нового метода диагностики",
    "Разработка программного обеспечения для школ",
    "Проект по исследованию космоса",
    "Создание виртуального музея"
]

short_descriptions = [
    "Краткое описание мероприятия.",
    "Небольшой семинар по теме.",
    "Краткий обзор нового проекта.",
    "Описание предстоящей конференции.",
    "Краткая информация о проекте.",
    "Интересное мероприятие в городе.",
    "Основные моменты мероприятия.",
    "Презентация новой платформы.",
    "Краткий обзор работы форума.",
    "Событие для специалистов."
]

descriptions = [
    "Это важное событие, посвященное обсуждению последних достижений в области науки и технологий. Участники смогут познакомиться с новыми открытиями, задать вопросы ведущим специалистам и обменяться опытом. Ожидается, что на конференции будут обсуждены ключевые тренды и вызовы отрасли. Не упустите шанс быть в курсе актуальных тенденций и инноваций.",
    "Мероприятие предназначено для всех, кто интересуется новыми направлениями в развитии современной науки. На встрече будут представлены интересные исследования, а также состоятся обсуждения с участием ученых и практиков. Вы сможете задать вопросы спикерам и узнать о передовых методах в различных областях науки. Это отличная возможность для обмена знаниями и расширения своего круга общения.",
    "Проект направлен на разработку инновационных решений для бизнеса и образования. Мы планируем создать удобные инструменты, которые помогут улучшить качество жизни и повысить эффективность работы. В проекте будут использованы новейшие технологии и методы, что обеспечит его успешную реализацию. Участники смогут увидеть результаты работы и обсудить дальнейшие шаги в развитии проекта.",
    "Форум будет посвящен новейшим тенденциям в области технологий и их влиянию на общество. На мероприятии будут представлены последние разработки, а также обсуждены вопросы, касающиеся их применения в различных сферах жизни. Участники смогут услышать мнение экспертов и принять участие в дискуссиях. Форум предоставит уникальную возможность узнать о новых технологических достижениях и их будущем.",
    "Событие, посвященное искусству и культуре, где будут представлены работы современных художников и творцов. Вы сможете насладиться уникальными экспонатами, участвующими в выставке, а также пообщаться с художниками и узнать больше о их творчестве. Выставка предложит разнообразные художественные формы и стили, которые позволят вам погрузиться в мир современного искусства. Не пропустите шанс увидеть работы, которые могут изменить ваше восприятие искусства.",
    "Книжная ярмарка соберет множество издательств и авторов, представляющих широкий спектр книг и изданий. Здесь вы найдете как новинки литературы, так и классические произведения, которые можно будет приобрести по специальным ценам. Ярмарка также станет отличной возможностью для общения с авторами и издателями. Участники смогут узнать о новых книгах и принять участие в различных мероприятиях, связанных с литературой.",
    "Научная конференция по физике будет посвящена обсуждению новых открытий и исследований в этой области. В программе конференции — лекции ведущих ученых, презентации актуальных исследований и обсуждения ключевых вопросов. Участники смогут получить актуальную информацию о последних достижениях и обменяться идеями с коллегами из разных стран. Это мероприятие станет важной вехой для всех, кто интересуется современными достижениями в физике.",
    "Фестиваль уличной еды — это праздник для гурманов и любителей вкусной пищи. Здесь вы сможете попробовать блюда различных кухонь мира, насладиться атмосферой праздника и пообщаться с другими участниками. На фестивале будут представлены разнообразные уличные еды, которые приятно удивят своими вкусами и подачей. Это отличная возможность провести время с семьей и друзьями в веселой и непринужденной обстановке.",
    "Концерт классической музыки пройдет в историческом зале с великолепной акустикой. Вы сможете насладиться произведениями известных композиторов, исполненными мастерами музыкального искусства. Концерт обещает быть не только приятным для ушей, но и вдохновляющим для духа. Это уникальная возможность погрузиться в мир классической музыки и насладиться её богатством и красотой.",
    "Бизнес-форум по стартапам предоставит площадку для обмена опытом и поиска новых идей. На форуме соберутся предприниматели, инвесторы и специалисты, которые поделятся своими знаниями и опытом в области стартапов. Участники смогут получить ценные советы по запуску и развитию бизнеса, а также найти потенциальных партнеров и инвесторов. Это мероприятие поможет вам сделать следующие шаги в развитии вашего стартапа.",
]

# Список адресов для случайного выбора
addresses = [
    "115280, г. Москва, ул. Автозаводская, д. 16",
    "ул. Павла Корчагина, д. 22",
    "127550, г. Москва, ул. Прянишникова, 2А",
    "107023, г. Москва, ул. Большая Семёновская, 38"
]

# Создание записей для модели Event
for i in range(10):
    event = Event(
        name=event_names[i],
        description=descriptions[i],
        short_description=short_descriptions[i],
        address=random.choice(addresses),  # Случайный выбор адреса из списка
        start_date=date.today() + timedelta(days=random.randint(1, 30)),
        end_date=date.today() + timedelta(days=random.randint(31, 60)),
    )
    event.save()

# Создание записей для модели Project
for i in range(10):
    project = Project(
        name=project_names[i],
        description=descriptions[i],
        short_description=short_descriptions[i],
    )
    project.save()
