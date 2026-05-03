# 🧪 Мини проект: Интерактивна страница само чрез Console

## Цел

Целта на упражнението е да се покаже, че JavaScript може да променя вече заредена HTML страница директно от браузъра.

Не се редактират HTML, CSS или JS файлове.  
Всичко се изпълнява през **Console** в Developer Tools.

---

## Какво ще се направи?

От вече заредена страница ще се създаде малък интерактивен блок, който съдържа:

- заглавие
- текст
- бутон
- списък
- промяна при клик

---

## Подготовка

1. Отваряне на произволна HTML страница.
2. Отваряне на Developer Tools:
   - F12
   - или Right click → Inspect
3. Избор на таб **Console**.
4. Изпълнение на JavaScript командите една по една.

---

# Част 1: Създаване на нова секция

```javascript
let section = document.createElement("section");
section.style.backgroundColor = "#f5f5f5";
section.style.border = "1px solid #ccc";
section.style.padding = "20px";
section.style.margin = "20px";
document.body.appendChild(section);
```

## Какво се случва?

- създава се нов HTML елемент `<section>`
- добавят се CSS стилове чрез JavaScript
- секцията се добавя в края на страницата

---

# Част 2: Добавяне на заглавие

```javascript
let title = document.createElement("h2");
title.textContent = "JavaScript мини проект";
section.appendChild(title);
```

## Какво се случва?

- създава се заглавие
- задава се текст
- заглавието се добавя в секцията

---

# Част 3: Добавяне на описание

```javascript
let text = document.createElement("p");
text.textContent = "Този блок е създаден директно от Console.";
section.appendChild(text);
```

---

# Част 4: Добавяне на списък

```javascript
let list = document.createElement("ul");

let item1 = document.createElement("li");
item1.textContent = "Създаване на елементи";

let item2 = document.createElement("li");
item2.textContent = "Промяна на съдържание";

let item3 = document.createElement("li");
item3.textContent = "Работа със събития";

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);

section.appendChild(list);
```

## Какво се случва?

Създава се списък с три елемента и се добавя към страницата.

---

# Част 5: Добавяне на бутон

```javascript
let button = document.createElement("button");
button.textContent = "Промени блока";
button.style.padding = "10px 15px";
button.style.backgroundColor = "#2c3e50";
button.style.color = "white";
button.style.border = "none";
button.style.cursor = "pointer";

section.appendChild(button);
```

---

# Част 6: Добавяне на действие при клик

```javascript
button.addEventListener("click", function () {
    title.textContent = "Блокът беше променен!";
    text.textContent = "Промяната се случи след натискане на бутона.";
    section.style.backgroundColor = "#dff9fb";
});
```

## Какво се случва?

При натискане на бутона:

- заглавието се променя
- текстът се променя
- фонът на секцията се променя

---

# Част 7: Добавяне на нов елемент при клик

```javascript
button.addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = "Нов елемент, добавен при клик";
    list.appendChild(newItem);
});
```

## Какво се случва?

Всеки път при натискане на бутона се добавя нов елемент в списъка.

---

# Част 8: Проверка с console.log

```javascript
console.log(section);
console.log(title.textContent);
console.log(list.children.length);
```

## Какво се проверява?

- дали секцията съществува
- какъв е текстът на заглавието
- колко елемента има в списъка

---

# Цял код наведнъж

Кодът може да се изпълни и наведнъж в Console.

```javascript
let section = document.createElement("section");
section.style.backgroundColor = "#f5f5f5";
section.style.border = "1px solid #ccc";
section.style.padding = "20px";
section.style.margin = "20px";

let title = document.createElement("h2");
title.textContent = "JavaScript мини проект";

let text = document.createElement("p");
text.textContent = "Този блок е създаден директно от Console.";

let list = document.createElement("ul");

let item1 = document.createElement("li");
item1.textContent = "Създаване на елементи";

let item2 = document.createElement("li");
item2.textContent = "Промяна на съдържание";

let item3 = document.createElement("li");
item3.textContent = "Работа със събития";

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);

let button = document.createElement("button");
button.textContent = "Промени блока";
button.style.padding = "10px 15px";
button.style.backgroundColor = "#2c3e50";
button.style.color = "white";
button.style.border = "none";
button.style.cursor = "pointer";

section.appendChild(title);
section.appendChild(text);
section.appendChild(list);
section.appendChild(button);
document.body.appendChild(section);

button.addEventListener("click", function () {
    title.textContent = "Блокът беше променен!";
    text.textContent = "Промяната се случи след натискане на бутона.";
    section.style.backgroundColor = "#dff9fb";

    let newItem = document.createElement("li");
    newItem.textContent = "Нов елемент, добавен при клик";
    list.appendChild(newItem);

    console.log("Бутонът беше натиснат.");
    console.log("Брой елементи в списъка:", list.children.length);
});
```

---

# Мини задачи

## Задача 1

Промяна на текста на бутона.

Пример:

```javascript
button.textContent = "Натисни ме";
```

---

## Задача 2

Промяна на цвета на заглавието.

Пример:

```javascript
title.style.color = "darkblue";
```

---

## Задача 3

Добавяне на още един първоначален елемент в списъка.

---

## Задача 4

Промяна на действието при клик така, че:

- фонът да става друг цвят
- заглавието да има различен текст
- да се добавя различно съобщение в списъка

---

## Задача 5

Добавяне на втори бутон, който скрива секцията.

Подсказка:

```javascript
section.style.display = "none";
```

---

# Важни понятия

## `document.createElement`

Създава нов HTML елемент.

```javascript
document.createElement("p");
```

---

## `textContent`

Задава или променя текстово съдържание.

```javascript
title.textContent = "Нов текст";
```

---

## `appendChild`

Добавя елемент вътре в друг елемент.

```javascript
section.appendChild(title);
```

---

## `style`

Позволява промяна на CSS чрез JavaScript.

```javascript
section.style.backgroundColor = "pink";
```

---

## `addEventListener`

Добавя реакция при събитие.

```javascript
button.addEventListener("click", function () {
    console.log("click");
});
```

---

# Обобщение

Чрез Console могат да се изпълняват JavaScript команди директно върху заредена страница.

С JavaScript може да се:

- създават HTML елементи
- променя текст
- променя CSS
- добавят елементи в страницата
- реагира на действия на потребителя

Промените, направени през Console, са временни и изчезват при презареждане на страницата.
