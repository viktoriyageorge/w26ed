# 🧪 JavaScript Console Lab: Интерактивна страница + външни JSON данни

## Цел

Целта на упражнението е да се покаже как JavaScript може да променя вече заредена HTML страница директно от **Console** в браузъра.

Не се редактират HTML, CSS или JS файлове.  
Всичко се изпълнява през **Developer Tools → Console**.

---

## Какво ще се упражни

- `console.log`
- избор на HTML елементи
- промяна на текст
- промяна на стил
- добавяне на нови елементи
- събития при клик
- `fetch`
- работа с JSON данни от публичен API

---

## Използвани файлове

1. `console-lab-page-1.html`  
   Страница за упражнения с DOM, стилове, елементи и събития.

2. `console-lab-page-2-fetch.html`  
   Страница за упражнения с `fetch` и JSON данни.

---

# Част 1: Първа HTML страница

Отваря се файлът:

```text
console-lab-page-1.html
```

След това се отваря:

```text
Developer Tools → Console
```

---

## 1. Първи Console примери

```javascript
console.log("Console работи");
```

```javascript
console.log(document);
```

```javascript
console.log(document.title);
```

```javascript
console.log(document.body);
```

## Какво се случва?

- Console извежда текст
- показва се HTML документът
- вижда се заглавието на страницата
- може да се провери структурата на страницата

---

## Мини задача 1

Изпълнение в Console:

```javascript
console.log("Име: ...");
console.log("Специалност: ...");
```

След изпълнение се прави screenshot на Console.

---

# Част 2: Избор и промяна на елементи

## 2. Смяна на заглавие

```javascript
document.querySelector("h1").textContent = "JavaScript променя страницата";
```

## 3. Смяна на подзаглавие

```javascript
document.getElementById("subtitle").textContent = "Текстът е променен чрез Console";
```

## 4. Промяна на фон

```javascript
document.body.style.backgroundColor = "#eaf7ff";
```

## 5. Промяна на навигацията

```javascript
document.getElementById("main-nav").style.backgroundColor = "#0984e3";
```

---

## Мини задача 2

Да се промени:

- заглавието на страницата
- фонът на страницата
- цветът на навигацията

След изпълнение се прави screenshot на страницата.

---

# Част 3: Работа с повече елементи

## 6. Избор на всички course cards

```javascript
let cards = document.querySelectorAll(".course-card");
console.log(cards);
console.log(cards.length);
```

## 7. Промяна на първата карта

```javascript
cards[0].style.backgroundColor = "#dff9fb";
cards[0].style.border = "2px solid #00cec9";
```

## 8. Промяна на всички карти

```javascript
cards.forEach(function(card) {
    card.style.borderRadius = "10px";
    card.style.padding = "20px";
});
```

---

## Мини задача 3

Да се изберат всички `.event-card` елементи и да се промени:

- фонът
- рамката
- разстоянието вътре в картата

След изпълнение се прави screenshot.

---

# Част 4: Добавяне на нов HTML елемент

## 9. Създаване на нов курс

```javascript
let newCourse = document.createElement("article");
newCourse.className = "course-card";
newCourse.innerHTML = "<h3>JavaScript</h3><p>Интерактивност в браузъра.</p>";

document.getElementById("courses-section").appendChild(newCourse);
```

## Какво се случва?

- създава се нов `<article>`
- добавя се клас
- добавя се HTML съдържание
- елементът се поставя в секцията с курсове

---

## Мини задача 4

Да се добави ново събитие в секцията `events-section`.

Примерно съдържание:

- заглавие: `DevTools практика`
- описание: `Упражнение с Console и JavaScript`

След изпълнение се прави screenshot.

---

# Част 5: Събитие при клик

## 10. Реакция при натискане на бутон

```javascript
let button = document.getElementById("demo-button");

button.addEventListener("click", function() {
    alert("Бутонът беше натиснат");
});
```

## 11. Промяна на страница при клик

```javascript
button.addEventListener("click", function() {
    document.getElementById("welcome-section").style.backgroundColor = "#ffeaa7";
});
```

---

## Мини задача 5

Да се добави действие към бутона, така че при натискане:

- да се промени текстът на бутона
- да се промени цветът на секцията
- да се изпише съобщение в Console

Пример:

```javascript
console.log("Потребителят натисна бутона");
```

След изпълнение се прави screenshot след натиснат бутон.

---

# Част 6: Втора HTML страница + fetch

Отваря се файлът:

```text
console-lab-page-2-fetch.html
```

Тази част използва публичния ресурс:

```text
https://jsonplaceholder.typicode.com
```

JSONPlaceholder предоставя безплатен fake REST API за тестове и прототипи.

---

## 12. Първи fetch пример

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
```

## Какво се случва?

- изпраща се заявка към външен ресурс
- получава се JSON отговор
- JSON се преобразува към JavaScript object
- резултатът се показва в Console

---

## Мини задача 6

Да се зареди друг todo запис:

```javascript
https://jsonplaceholder.typicode.com/todos/5
```

Да се направи screenshot на Console с получения обект.

---

# Част 7: Показване на fetch резултат в страницата

## 13. Зареждане на потребител

```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response) {
        return response.json();
    })
    .then(function(user) {
        let results = document.getElementById("api-results");

        results.innerHTML = `
            <article class="user-card">
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Град: ${user.address.city}</p>
            </article>
        `;
    });
```

## Какво се случва?

- данните идват от външен JSON ресурс
- JavaScript създава HTML
- страницата се обновява без презареждане

---

## Мини задача 7

Да се зареди потребител с различно ID:

```text
/users/2
/users/3
/users/4
```

Да се визуализират:

- име
- email
- град

След изпълнение се прави screenshot на страницата.

---

# Част 8: Зареждане на няколко записа

## 14. Зареждане на posts

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        let results = document.getElementById("api-results");

        results.innerHTML = "";

        posts.slice(0, 5).forEach(function(post) {
            let article = document.createElement("article");
            article.className = "post-card";

            article.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            results.appendChild(article);
        });
    });
```

---

## Мини задача 8

Да се промени примерът така, че да показва само първите 3 posts.

Подсказка:

```javascript
posts.slice(0, 3)
```

След изпълнение се прави screenshot.

---

# Част 9: Fetch при натискане на бутон

## 15. Зареждане на users при клик

```javascript
let loadButton = document.getElementById("load-users-button");

loadButton.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
            return response.json();
        })
        .then(function(users) {
            let results = document.getElementById("api-results");

            results.innerHTML = "";

            users.slice(0, 5).forEach(function(user) {
                let article = document.createElement("article");
                article.className = "user-card";

                article.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                    <p>${user.company.name}</p>
                `;

                results.appendChild(article);
            });
        });
});
```

---

## Мини задача 9

Да се добави действие към бутона `clear-results-button`, което изчиства резултатите.

Подсказка:

```javascript
document.getElementById("api-results").innerHTML = "";
```

След изпълнение се прави screenshot преди и след изчистване.

---

# Финална мини задача

Във втората страница да се направи малък блок с данни от API:

Изисквания:

- да се използва `fetch`
- да се вземат данни от JSONPlaceholder
- да се покажат поне 3 елемента в страницата
- да има поне една промяна на стил чрез JavaScript

Примерни ресурси:

```text
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/todos
```

Резултатът се предава като screenshot.

---

# Важни понятия

## `console.log`

Показва информация в Console.

```javascript
console.log("Test");
```

---

## `document.querySelector`

Избира първия елемент, който отговаря на CSS selector.

```javascript
document.querySelector("h1");
```

---

## `document.querySelectorAll`

Избира всички елементи, които отговарят на CSS selector.

```javascript
document.querySelectorAll(".course-card");
```

---

## `textContent`

Променя текст.

```javascript
element.textContent = "Нов текст";
```

---

## `style`

Променя CSS чрез JavaScript.

```javascript
element.style.backgroundColor = "pink";
```

---

## `createElement`

Създава нов HTML елемент.

```javascript
document.createElement("article");
```

---

## `appendChild`

Добавя елемент вътре в друг елемент.

```javascript
parent.appendChild(child);
```

---

## `addEventListener`

Добавя реакция при събитие.

```javascript
button.addEventListener("click", function() {
    console.log("click");
});
```

---

## `fetch`

Изпраща заявка към ресурс и връща отговор.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
```

---

# Обобщение

JavaScript в Console позволява директни експерименти със заредена страница.

Чрез Console могат да се упражняват:

- промяна на HTML
- промяна на CSS
- добавяне на елементи
- реакции при събития
- зареждане на външни JSON данни чрез fetch

Промените са временни и изчезват при презареждане на страницата.
