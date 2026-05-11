# JavaScript: AJAX, APIs, JSON и как работи fetch

## Основна идея

JavaScript може да комуникира със сървър и да получава данни динамично, без презареждане на страницата.

Това позволява:
- зареждане на данни в реално време
- търсене
- филтриране
- динамични списъци
- работа с външни услуги (APIs)

---

# HTTP и комуникация клиент ↔ сървър

## HTTP

HTTP = HyperText Transfer Protocol

HTTP е протокол за комуникация между:
- клиент
- сървър

В уеб приложенията клиентът обикновено е браузърът, а сървърът обработва заявките и връща отговор.

---

## Request / Response модел

### Request

Request означава заявка.

Пример:

```text
Дай списък с users
```

---

### Response

Response означава отговор.

Пример:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham"
  }
]
```

---

# API

## Какво е API

API = Application Programming Interface

API е интерфейс, чрез който различни приложения комуникират помежду си.

Интуитивно API може да се разглежда като „меню“ от възможности.

Пример:

```text
/users
/posts
/weather
/movies
```

Различните API-та предоставят:
- данни
- услуги
- функционалности

---

# AJAX

## Какво е AJAX

AJAX = Asynchronous JavaScript And XML

AJAX е техника, при която JavaScript изпраща заявки към сървър без презареждане на страницата.

Исторически AJAX е използвал XML, но днес почти винаги се използва JSON.

---

## XML

XML = eXtensible Markup Language

XML е формат за структурирани данни.

Пример:

```xml
<user>
    <name>Ivan</name>
    <age>22</age>
</user>
```

Днес JSON е много по-популярен поради:
- по-кратък синтаксис
- по-лесна работа в JavaScript
- по-малък размер

---

## Основна идея на AJAX

```text
JavaScript изпраща заявка към сървъра
↓
получава данни
↓
обновява страницата
↓
без презареждане
```

AJAX не е библиотека.

AJAX е модел на работа.

---

# JSON

## Какво е JSON

JSON = JavaScript Object Notation

JSON е текстов формат за обмен на данни.

Пример:

```json
{
  "name": "Ivan",
  "age": 22
}
```

---

## JSON и JavaScript object

JavaScript object:

```javascript
const user = {
    name: "Ivan"
};
```

JSON:

```json
{
  "name": "Ivan"
}
```

Разлики:
- JSON е текст
- ключовете са в двойни кавички
- JSON не съдържа функции

---

# fetch()

## Какво прави fetch

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
```

`fetch()` изпраща HTTP заявка към сървър.

Резултатът е Promise.

---

## Асинхронност

Asynchronous означава асинхронно.

Асинхронната операция:
- започва
- JavaScript не блокира страницата
- резултатът идва по-късно

---

## async / await

### async

Позволява използване на `await`.

### await

Изчаква резултат от асинхронна операция.

---

## Как работи fetch

```javascript
const response = await fetch(url);
const data = await response.json();
```

---

## Защо има 2 пъти await

Има две отделни асинхронни операции.

### Първи await

```javascript
const response = await fetch(url);
```

Изчаква:
- изпращането на заявката
- получаването на Response обект

---

### Втори await

```javascript
const data = await response.json();
```

Изчаква:
- прочитането на данните
- преобразуването на JSON към JavaScript object

---

## Интуитивно обяснение

```text
fetch → получаване на кутия
json() → отваряне на кутията
```

Response не е самата информация.

---

## Без await

```javascript
const data = fetch(url);

console.log(data);
```

Резултат:

```text
Promise {<pending>}
```

---

## С await

```javascript
const response = await fetch(url);
const data = await response.json();

console.log(data);
```

Резултатът са реалните данни.

---

# Работа с APIs

# Weather API

API:

```text
https://api.open-meteo.com/
```

Пример:

```javascript
fetch("https://api.open-meteo.com/v1/forecast?latitude=42.69&longitude=23.32&current_weather=true")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

Възможни приложения:
- текуща температура
- скорост на вятъра
- прогноза
- динамична смяна на икони

---

# Cat Facts API

API:

```text
https://catfact.ninja/fact
```

Пример:

```javascript
fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
        console.log(data.fact);
    });
```

Възможни приложения:
- бутон „Нов факт“
- списък с факти
- броене на заредени факти

---

# Random Users API

API:

```text
https://randomuser.me/api/
```

Пример:

```javascript
fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0]);
    });
```

Възможни приложения:
- случайни профили
- карти с потребители
- снимки и държави

---

# Movie Database API

API:

```text
https://www.omdbapi.com/
```

OMDb API използва API key.

API key е ключ за достъп до услуга.

Пример:

```javascript
fetch("https://www.omdbapi.com/?apikey=KEY&t=Batman")
```

Възможни приложения:
- movie search
- постери
- рейтинг
- информация за филми

---

# Mini Search

## Основна идея

Mini search е малка функционалност за:
- търсене
- филтриране
- autocomplete

---

## HTML пример

```html
<input type="text" id="search" placeholder="Търси курс...">

<ul id="course-list">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>PHP</li>
    <li>SQL</li>
</ul>
```

---

# Live Search

Live search означава търсене, което се случва веднага при въвеждане.

```javascript
const searchInput = document.getElementById("search");
const items = document.querySelectorAll("#course-list li");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    items.forEach(function (item) {
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchText)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
});
```

Какво се случва:
- слуша се `input`
- проверява се всеки елемент
- несъвпадащите елементи се скриват

---

# Филтриране

Филтриране означава показване само на елементи, които отговарят на условие.

```javascript
const courses = ["HTML", "CSS", "JavaScript", "PHP", "SQL"];

const filteredCourses = courses.filter(function (course) {
    return course.toLowerCase().includes("s");
});

console.log(filteredCourses);
```

Резултат:

```javascript
["CSS", "JavaScript", "SQL"]
```

---

# Autocomplete

Autocomplete предлага възможни резултати по време на писане.

HTML:

```html
<input type="text" id="autocomplete" placeholder="Започни да пишеш...">
<ul id="suggestions"></ul>
```

JavaScript:

```javascript
const autocompleteInput = document.getElementById("autocomplete");
const suggestionsList = document.getElementById("suggestions");

const technologies = ["HTML", "CSS", "JavaScript", "PHP", "SQL", "React", "Node.js"];

autocompleteInput.addEventListener("input", function () {
    const text = autocompleteInput.value.toLowerCase();

    suggestionsList.innerHTML = "";

    if (text === "") {
        return;
    }

    const suggestions = technologies.filter(function (tech) {
        return tech.toLowerCase().startsWith(text);
    });

    suggestions.forEach(function (suggestion) {
        const li = document.createElement("li");
        li.textContent = suggestion;
        suggestionsList.appendChild(li);
    });
});
```

Какво се случва:
- взима се текстът
- филтрират се предложенията
- създават се нови `<li>` елементи
- предложенията се визуализират

---

# Mini Search + fetch

Mini search може да работи и с външни данни.

HTML:

```html
<input type="text" id="user-search" placeholder="Търси потребител...">
<div id="users"></div>
```

JavaScript:

```javascript
const userSearch = document.getElementById("user-search");
const usersContainer = document.getElementById("users");

let allUsers = [];

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        allUsers = users;
        renderUsers(allUsers);
    });

function renderUsers(users) {
    usersContainer.innerHTML = "";

    users.forEach(function (user) {
        const article = document.createElement("article");

        article.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <p>${user.address.city}</p>
        `;

        usersContainer.appendChild(article);
    });
}

userSearch.addEventListener("input", function () {
    const text = userSearch.value.toLowerCase();

    const filteredUsers = allUsers.filter(function (user) {
        return user.name.toLowerCase().includes(text);
    });

    renderUsers(filteredUsers);
});
```

---

# Какво се стабилизира

## Arrays

```javascript
users[0]
users.forEach(...)
users.some(...)
users.filter(...)
```

---

## Objects

```javascript
user.name
user.address.city
```

---

## Functions

```javascript
function renderUsers(users) {

}
```

---

## Events

```javascript
input.addEventListener("input", ...)
```

---

## Async flow

```javascript
await fetch(...)
response.json()
```

---

# Реален flow

```text
input / click
↓
event
↓
fetch
↓
response
↓
json
↓
JavaScript object
↓
DOM update
```

---

# Обобщение

AJAX:
- заявки без презареждане

API:
- предоставяне на данни и функционалност

JSON:
- формат за обмен на данни

fetch:
- модерен начин за HTTP заявки

async/await:
- управление на асинхронен код

Mini search:
- динамично търсене и филтриране

JavaScript позволява:
- комуникация със сървър
- работа с динамични данни
- интерактивни frontend приложения
