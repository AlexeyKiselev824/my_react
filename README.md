# MyReact
Front-end приложение для просмотра, создания и редактирования постов.

## Стек технологий:
* React + React Hooks
* React Router
* TypeScript
* Redux Toolkit, RTK Query
* CSS modules

## Сервер для хранения данных:
Реализован с помощью фейкового REST API взятого с GitHub:
`https://github.com/typicode/json-server`

## Для запуска:
```
npm clone https://github.com/AlexeyKiselev824/my_react
```
```
npm install
```
```
npm run dev
```

## Описание:
1. Стартовая страница для входа (введите любой логин и пароль)
2. Главная страница с постами содержит:
    * сами посты
    * фильтрация постов по заголовку или содержанию
    * поиск по заголовку поста с задержкой при вводе
    * постраничная пагинация с возможностью установки лимитов на вывод
    * формы для добавления и редактирования постов
    * при нажатии на сам пост, открывается его страница
3. Страница About - экспериментальная, добавлен счетчик из документации redux/toolkit. А так же youtube видео.

## Скриншоты:
1. Главная страница

![Главная страница](https://github.com/AlexeyKiselev824/_pages/blob/main/_image/my-react-1.png)

2. Страница поста

![Главная страница](https://github.com/AlexeyKiselev824/_pages/blob/main/_image/my-react-2.png)
