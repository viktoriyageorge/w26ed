// =======================================
// JavaScript Review - CampusHub

// =======================================



// =======================================
// INDEX PAGE - Смяна на заглавие
// =======================================

var changeBtn = document.getElementById("changeTitleBtn");

if (changeBtn) {
    changeBtn.addEventListener("click", function () {
        var title = document.querySelector("h2");
        var message = document.getElementById("message");

        title.textContent = "Добре дошли в JavaScript!";
        message.textContent = "Променихме страницата 🎉";
    });
}



// =======================================
// COURSES PAGE - Скриване / показване
// =======================================

var toggleBtn = document.getElementById("toggleBtn");

if (toggleBtn) {
    var table = document.querySelector("table");

    toggleBtn.addEventListener("click", function () {
        if (table.style.display === "none") {
            table.style.display = "table";
            toggleBtn.textContent = "Скрий програмата";
        } else {
            table.style.display = "none";
            toggleBtn.textContent = "Покажи програмата";
        }
    });
}



// =======================================
// COURSES PAGE - Добавяне на курс
// =======================================

var addBtn = document.getElementById("addCourseBtn");

if (addBtn) {
    var section = document.querySelector("section");

    addBtn.addEventListener("click", function () {
        var article = document.createElement("article");

        article.innerHTML = `
            <h3>Нов курс</h3>
            <p>Добавен чрез JavaScript</p>
        `;

        section.appendChild(article);
    });
}



// =======================================
// CONTACT PAGE - Валидация на форма
// =======================================

var form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        var name = document.getElementById("fullname").value;
        var error = document.getElementById("errorMessage");

        if (name.length < 3) {
            event.preventDefault();
            error.textContent = "Името трябва да е поне 3 символа";
        } else {
            error.textContent = "";
        }
    });
}
