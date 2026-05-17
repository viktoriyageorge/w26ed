# PHP + Database Integration

## От HTML форма до база данни

Досега HTML формите събираха данни.

Пример:

```html
<form method="post" action="add-elective.php">
    <input name="title">
    <input name="lecturer">
    <button type="submit">Save</button>
</form>
```

След натискане на submit възниква важен въпрос:

Къде отиват тези данни?

HTML сам по себе си не може да запазва данни или да комуникира с база данни.

Тук започва ролята на PHP.

---

## JavaScript vs PHP execution model

### JavaScript

JavaScript живее в browser runtime.

Може да:

- чака click
- реагира на input
- слуша events
- остава активен след зареждане

Пример:

```javascript
button.addEventListener("click", function () {
    console.log("clicked");
});
```

JavaScript остава активен и реагира на събития.

### PHP

PHP работи request-by-request.

```text
request arrives
↓
execute PHP
↓
send response
↓
stop
```

Browser никога не изпълнява PHP.

Browser получава резултата от PHP изпълнението — обикновено HTML.

---

## Request lifecycle

При класическо PHP приложение заявката преминава през последователен lifecycle.

```text
Browser
↓
HTTP request
↓
PHP runtime starts
↓
request parsing
↓
validation
↓
business logic
↓
database access
↓
HTML response generation
↓
Browser render
```

При всяка нова заявка:

- PHP кодът се изпълнява отначало
- заявката се обработва
- генерира се response
- изпълнението приключва

Това е важна разлика спрямо JavaScript в браузъра.

---

## PHP като orchestration layer

PHP стои между browser и database.

PHP не е frontend.

PHP не е database engine.

PHP координира процеса.

Основни отговорности:

- четене на request данни
- валидация
- business logic
- комуникация с database
- генериране на response

Примерен flow:

```text
form submit
↓
$_POST
↓
validation
↓
prepare SQL
↓
execute query
↓
render / redirect
```

---

## Как PHP говори с базата

PHP не може да комуникира с MySQL „магически“.

Нужен е interface/driver.

В този курс се използва PDO.

PDO = PHP Data Objects

```php
$conn = new PDO(
    "mysql:host=localhost;dbname=university;charset=utf8",
    "root",
    ""
);
```

PDO позволява:

- създаване на connection
- изпращане на SQL заявки
- prepared statements
- извличане на резултати

---

## Query lifecycle

Типичен database flow:

```php
$stmt = $conn->prepare($sql);
$stmt->execute($params);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
```

Това са три отделни фази.

### prepare()

```php
$stmt = $conn->prepare($sql);
```

Подготвя SQL структурата.

Все още няма подадени конкретни стойности.

### execute()

```php
$stmt->execute($params);
```

Подават се конкретните данни.

Заявката се изпълнява.

### fetch() / fetchAll()

```php
$stmt->fetch();
$stmt->fetchAll();
```

Резултатът се преобразува до PHP структура.

---

## Аналогия с fetch()

JavaScript:

```javascript
const response = await fetch(url);
const data = await response.json();
```

PHP:

```php
$stmt = $conn->prepare($sql);
$stmt->execute();
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
```

Mental model:

```text
JavaScript
fetch()         → request
response.json() → parsing

PHP
prepare()       → query preparation
execute()       → query execution
fetchAll()      → result extraction
```

И в двата случая данните не идват директно в готов вид.

Нужен е processing step.

---

## Защо prepared statements

Лош подход:

```php
$username = $_POST["username"];
$sql = "SELECT * FROM users WHERE username = '$username'";
```

Изглежда кратко, но създава проблеми:

- SQL injection
- escaping complexity
- смесване на SQL и input data
- ниска maintainability

Добър подход:

```php
$stmt = $conn->prepare(
    "SELECT * FROM users WHERE username = :username"
);

$stmt->execute([
    "username" => $username
]);
```

SQL структурата и входните данни са разделени.

Това е по-сигурно и по-четимо.

---

## Result mapping

Database връща rows.

Пример:

```text
id | title            | lecturer
1  | Web Technologies | Milen
2  | Databases        | Ivan
```

След:

```php
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
```

Резултат:

```php
[
    [
        "id" => 1,
        "title" => "Web Technologies",
        "lecturer" => "Milen"
    ],
    [
        "id" => 2,
        "title" => "Databases",
        "lecturer" => "Ivan"
    ]
]
```

Това е result mapping.

Database result → PHP application structure.

---

## Server-side rendering

След извличане на данните PHP генерира HTML.

```php
foreach ($rows as $row) {
    echo "<article>";
    echo "<h2>{$row["title"]}</h2>";
    echo "<p>{$row["lecturer"]}</p>";
    echo "</article>";
}
```

Важно:

Browser никога не вижда PHP.

Browser получава само финалния HTML.

Например:

```html
<article>
    <h2>Web Technologies</h2>
    <p>Milen</p>
</article>
```

Това е server-side rendering.

---

## End-to-end create flow

Пример: добавяне на дисциплина.

### HTML form

```html
<form method="post" action="add-elective.php">
```

### Browser изпраща request

```text
POST /add-elective.php
```

### PHP чете входа

```php
$title = $_POST["title"];
$lecturer = $_POST["lecturer"];
```

### Validation

```php
if (empty($title)) {
    // show error
}
```

### Database insert

```php
$stmt = $conn->prepare(
    "INSERT INTO electives (title, lecturer)
     VALUES (:title, :lecturer)"
);
```

### Execute

```php
$stmt->execute([
    "title" => $title,
    "lecturer" => $lecturer
]);
```

### Redirect

```php
header("Location: electives.php");
```

---

## Read flow

Извличане на данни.

```text
GET request
↓
SELECT query
↓
fetchAll()
↓
render HTML
```

Пример:

```php
$stmt = $conn->query("SELECT * FROM electives");
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
```

---

## Edit flow

Редакцията е двуфазен процес.

### Phase 1: Load existing data

```text
GET /edit-elective.php?id=3
↓
SELECT WHERE id
↓
fetch row
↓
populate form
```

### Phase 2: Save changes

```text
POST /edit-elective.php?id=3
↓
read input
↓
validate
↓
UPDATE
↓
redirect
```

---

## GET vs POST

### GET

Използва се за retrieval.

Примери:

```text
/electives.php
/elective.php?id=5
```

GET не трябва да променя application state.

### POST

Използва се за mutation.

Примери:

```text
/add-elective.php
/edit-elective.php
```

POST променя application state.

---

## Redirect vs render

След успешен POST често е по-добре да се направи redirect.

```php
header("Location: electives.php");
exit;
```

Причина:

Ако след POST директно се render-ира страница, refresh може да изпрати формата повторно.

Redirect решава този проблем.

Това често се нарича Post/Redirect/Get pattern.

---

## Separation of concerns

Антипатърн:

```text
HTML + validation + SQL + connection + rendering
в един файл
```

Проблеми:

- difficult maintenance
- duplication
- debugging complexity
- tight coupling
- hard testing

По-добре:

```text
db.php
validation.php
helpers.php
electives.php
edit-elective.php
```

Логическите отговорности са разделени.

---

## Technical debt indicators

Сигнали:

- duplicated SQL
- repeated validation
- hardcoded credentials
- inline SQL everywhere
- copy-paste fixes
- mixed responsibilities
- magic strings

Пример:

```php
if ($_POST["title"] == "") {
    // validation
}
```

копирано в множество файлове.

---

## Architecture mental model

```text
Request layer
↓
Validation layer
↓
Business logic
↓
Database access
↓
Response rendering
```

Това не означава задължително отделен файл за всеки слой.

Но логическото разделение е важно.

---

## Mini review exercise

Примерен проблемен код:

```php
<?php
$conn = new PDO("mysql:host=localhost;dbname=university", "root", "");

if ($_POST) {
    $title = $_POST["title"];
    $lecturer = $_POST["lecturer"];

    if ($title != "") {
        $sql = "INSERT INTO electives (title, lecturer)
                VALUES ('$title', '$lecturer')";
        $conn->query($sql);
    }
}

$rows = $conn->query("SELECT * FROM electives")->fetchAll();

foreach ($rows as $row) {
    echo "<h2>" . $row["title"] . "</h2>";
}
?>
```

Въпроси за анализ:

- Къде има SQL injection риск?
- Къде има смесване на отговорности?
- Къде има duplicated или hardcoded logic?
- Какво би се изнесло в отделна функция или файл?

---

## Summary

Ключови идеи:

- PHP работи request-by-request
- browser не изпълнява PHP
- PDO е database interface
- prepared statements са стандартът
- SQL results се map-ват към PHP structures
- PHP генерира HTML response
- GET извлича data
- POST променя state
- redirect след POST предотвратява повторно изпращане
- separation of concerns намалява technical debt
