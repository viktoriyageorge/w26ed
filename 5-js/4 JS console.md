## ⚡ JavaScript в Console (браузър) — Разширено

Console позволява не само изпълнение на отделни команди, а и писане на логика, работа с данни и взаимодействие със страницата.

---

## 🧪 Основни операции

```javascript
let x = 5;
let y = 10;

x + y;
x * y;
x > y;
```

---

## 🧠 Променливи и типове

```javascript
let name = "Ivan";
let age = 20;
let isStudent = true;
```

```javascript
typeof name;
typeof age;
typeof isStudent;
```

---

## 🔀 Условия (if)

```javascript
let grade = 5;

if (grade >= 5) {
    console.log("Отличен резултат");
} else {
    console.log("Може повече");
}
```

---

## 🔁 Функции

```javascript
function greet(name) {
    return "Здравей, " + name;
}

greet("Мария");
```

---

## 🧮 Масиви

```javascript
let numbers = [1, 2, 3, 4];
numbers.push(5);
numbers.forEach(function(n) {
    console.log(n);
});
```

---

## 🌐 DOM

```javascript
document.querySelector("h1").textContent = "Нов текст";
document.body.style.backgroundColor = "lightblue";
document.querySelector("nav").style.display = "none";
```

---

## ➕ Добавяне на елемент

```javascript
let p = document.createElement("p");
p.textContent = "Добавен текст";
document.body.appendChild(p);
```

---

## 🎯 Събития

```javascript
document.body.addEventListener("click", function() {
    console.log("Клик!");
});
```

---

## 🚀 Упражнения

1. Изчисляване на сума и произведение
2. Създаване на функция square(n)
3. Добавяне на елемент в страницата
4. Смяна на фон при клик

---

## ⚠️ Важно

Промените са временни и изчезват при refresh.

---

JavaScript в Console позволява бързо експериментиране.
