# 🧩 JavaScript – Регистрационна форма
## 🎯 Цел

Създаване на форма с:
- валидация
- GET заявка
- проверка за потребител
- POST заявка

---

## 🧠 Основна идея

При submit:

1. спира се стандартното поведение
2. взимат се стойности
3. валидират се
4. изпраща се GET заявка
5. проверява се за съществуващ user
6. изпраща се POST заявка

---

## 📌 Submit събитие

```javascript
const form = document.getElementById("registration-form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // логика
});
```

### Обяснение

- `submit` се активира при натискане на бутона
- `preventDefault()` спира презареждането
- функцията е `async`, за да може да се използва `await`

---

## ⚡ Асинхронност (важно)

`fetch()` е асинхронна операция.

```javascript
const response = await fetch("...");
```

### Обяснение

- заявката отнема време
- `await` изчаква резултата
- `await` работи само в `async` функция

---

## 📌 GET заявка

```javascript
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await response.json();
```

---

## ❓ Защо има 2 пъти await

👉 Има две отделни асинхронни операции

### 1. fetch(...)

```javascript
const response = await fetch(...);
```

- изпраща HTTP заявка
- връща Response обект (НЕ данните)

---

### 2. response.json()

```javascript
const users = await response.json();
```

- прочита отговора
- преобразува JSON в JavaScript обект
- връща реалните данни

---

## 🧠 Интуитивно обяснение

- fetch → получаване на пратка
- json() → отваряне на пратката

---

## ⚠️ Важно

Response ≠ Data

---

## 📌 Вземане на стойности

```javascript
const username = document.getElementById("username").value.trim();
```

### Обяснение

- `.value` взима въведеното
- `.trim()` маха празни интервали

---

## 📌 Валидация

```javascript
if (username.length < 3 || username.length > 10) {
    document.getElementById("username-error").textContent = "3-10 символа";
}
```

### Обяснение

- проверява се условие
- при грешка се показва текст в HTML
- не се използва `alert`

---

## 📌 Контрол с променлива

```javascript
let isValid = true;

if (username.length < 3) {
    isValid = false;
}

if (!isValid) {
    return;
}
```

### Обяснение

- `isValid` следи състоянието
- при грешки процесът спира

---

## 📌 Проверка за съществуващ user

```javascript
const exists = users.some(user => user.username === username);
```

### Обяснение

- `.some()` връща true ако има съвпадение
- използва се за проверка в масив

---

## 📌 Подготовка на данни

```javascript
const userData = {
    username: username
};
```

### Обяснение

- създава се обект
- обектът ще бъде изпратен към сървъра

---

## 📌 POST заявка

```javascript
await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
});
```

### Обяснение

- `method: POST` означава запис
- `headers` описват типа данни
- `JSON.stringify()` превръща обект в текст

---

## 📌 Успешен резултат

```javascript
document.getElementById("success").textContent = "Успешна регистрация";
```

### Обяснение

- текстът се показва в HTML
- използва се отделен елемент

---

## ⚠️ Чести грешки

- липсва `.value`
- липсва `await`
- липсва `preventDefault()`
- грешни id-та
- използване на `alert`

---

## 🎯 Обобщение

- submit стартира логиката
- validation проверява данните
- GET взима информация
- проверка спира дублиране
- POST изпраща данни
