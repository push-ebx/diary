## Тестовое задание для компании Adwin
**_Необходимо сделать дневник используя предоставленный макет. Записи должны храниться в базе данных._**

Ссылка на [техническое задание](https://dynalist.io/d/6g-cygRRKeb1_czYVukCetKd)

Деплой реализован через Vercel. Ссылка на [продакшн стенд](https://diary-push-ebx.vercel.app/)

---

**Использован шаблон ```npm create vite@latest``` для react.**

Последовательность команд для запуска:
    
```cd client```

```npm install```

```cd ../server```

```npm install```

```cd ..```

```npm install```

```npm run dev```

Ссылка на [сервер](https://diary-y649-push-ebx.vercel.app)

#### Примеры заросов через REST API:
`POST` `/api/createNote` `body: {datetime: 1698394399013, title: 'Заметка', content: 'Контент'}`

`GET` `/api/getNote?id=7`

`GET` `/api/getNotes?latest=1&offset=6&count=4`

`GET` `/api/getCountNotes`
