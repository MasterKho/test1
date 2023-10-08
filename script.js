var button = document.getElementById('myButton');

// Добавляем обработчик события "click" для кнопки
button.addEventListener('click', function () {
    // Меняем текст кнопки при нажатии
    button.textContent = 'Заявка принята!';
    if(button.textContent){
        button.style.backgroundColor = '#00ff00'
    }
})
/*
var outputElement = document.getElementById(".button");
// Создаем текст, который мы хотим отобразить
var textToDisplay = "Привет, мир! Этот текст выведен с помощью JavaScript.";

// Вставляем текст в элемент
outputElement.textContent = textToDisplay;
/*
button.addEventListener('click', function () {
    // Меняем текст кнопки при нажатии
    button.textContent = 'Джин-Клубника-Базилик';
}*/
document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылку на кнопку с id "myButton"
    var button = document.getElementById("myButton");

    // Добавляем слушатель события
    button.addEventListener("click", function() {
        // Ваш обработчик события здесь
        alert("Кнопка была нажата");
    });
});