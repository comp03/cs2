// Функція реєстрації
function registerUser() {
    const name = document.getElementById('nickname').value;
    if (name.trim() !== "") {
        let users = JSON.parse(localStorage.getItem('csUsers')) || [];
        users.push(name);
        localStorage.setItem('csUsers', JSON.stringify(users));
        localStorage.setItem('isRegistered', 'true'); // Статус входу
        alert("Реєстрація успішна! Тепер доступ відкритий.");
        location.reload();
    }
}

// Відображення списку
if (document.getElementById('userList')) {
    let users = JSON.parse(localStorage.getItem('csUsers')) || [];
    const list = document.getElementById('userList');
    users.forEach(u => {
        let li = document.createElement('li');
        li.textContent = u;
        list.appendChild(li);
    });
}

// ПЕРЕВІРКА ДОСТУПУ
// Якщо ми НЕ на першій сторінці і НЕ зареєстровані - перекидаємо на index.html
const isRegistered = localStorage.getItem('isRegistered');
const currentPage = window.location.pathname.split("/").pop();

if (currentPage !== 'index.html' && currentPage !== '' && isRegistered !== 'true') {
    alert("СПОЧАТКУ ЗАРЕЄСТРУЙТЕСЯ!");
    window.location.href = 'index.html';
}