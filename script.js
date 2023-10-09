/*var button = document.getElementById("myButton");
      var isAlternate = false; // Флаг для отслеживания текущего состояния

      // Функция для изменения текста и фона кнопки
      function toggleTextAndBackground() {
        if (isAlternate) {
          // Если флаг установлен, возвращаем исходный текст и фон
          button.textContent = "Джин-Клубника-Базилик";
          button.style.backgroundColor = "";
        } else {
          // В противном случае, устанавливаем альтернативный текст и фон
          button.textContent = "Заявка принята!";
          button.style.backgroundColor = "#00ff00"; // Зеленый цвет фона
        }
        // Инвертируем флаг
        isAlternate = !isAlternate;
      }
      // Добавляем обработчик события "click" для кнопки
      button.addEventListener("click", toggleTextAndBackground);

      //вторая кнопка
      var button1 = document.getElementById("myButton2");
      var isAlternate1 = false; // Флаг для отслеживания текущего состояния

      // Функция для изменения текста и фона кнопки
      function toggleTextAndBackground1() {
        if (isAlternate1) {
          // Если флаг установлен, возвращаем исходный текст и фон
          button1.textContent = "Арбуз-Базилик";
          button1.style.backgroundColor = "";
        } else {
          // В противном случае, устанавливаем альтернативный текст и фон
          button1.textContent = "Заявка принята!";
          button1.style.backgroundColor = "#00ff00"; // Зеленый цвет фона
        }
        // Инвертируем флаг
        isAlternate1 = !isAlternate1;
      }
      // Добавляем обработчик события "click" для кнопки
      button1.addEventListener("click", toggleTextAndBackground1);

      //третья кнопка
      var button2 = document.getElementById("myButton3");
      var isAlternate2 = false; // Флаг для отслеживания текущего состояния

      // Функция для изменения текста и фона кнопки
      function toggleTextAndBackground2() {
        if (isAlternate2) {
          // Если флаг установлен, возвращаем исходный текст и фон
          button2.textContent = " Ром на груше - тархун";
          button2.style.backgroundColor = "";
        } else {
          // В противном случае, устанавливаем альтернативный текст и фон
          button2.textContent = "Заявка принята!";
          button2.style.backgroundColor = "#00ff00"; // Зеленый цвет фона
        }
        // Инвертируем флаг
        isAlternate2 = !isAlternate2;
      }
      // Добавляем обработчик события "click" для кнопки
      button2.addEventListener("click", toggleTextAndBackground2);

      //конец
      // Функция для изменения текста и фона кнопки
      function toggleTextAndBackground(button, isAlternate) {
        if (isAlternate) {
          // Если флаг установлен, возвращаем исходный текст и фон
          button.textContent = "Джин-Клубника-Базилик";
          button.style.backgroundColor = "";
        } else {
          // В противном случае, устанавливаем альтернативный текст и фон
          button.textContent = "Заявка принята!";
          button.style.backgroundColor = "#00ff00"; // Зеленый цвет фона
        }
        // Инвертируем флаг
        return !isAlternate;
      }

      // Получаем элементы кнопок
      var button = document.getElementById("myButton");
      var button1 = document.getElementById("myButton2");
      var button2 = document.getElementById("myButton3");

      // Инициализируем флаги для каждой кнопки
      var isAlternate = false;
      var isAlternate1 = false;
      var isAlternate2 = false;

      // Добавляем обработчики события "click" для кнопок
      button.addEventListener("click", function () {
        isAlternate = toggleTextAndBackground(button, isAlternate);
      });

      button1.addEventListener("click", function () {
        isAlternate1 = toggleTextAndBackground(button1, isAlternate1);
      });

      button2.addEventListener("click", function () {
        isAlternate2 = toggleTextAndBackground(button2, isAlternate2);
      });*/

      function toggleTextAndBackground(button, text1, text2) {
        var isAlternate = false; // Флаг для отслеживания текущего состояния

        return function () {
          if (isAlternate) {
            // Если флаг установлен, возвращаем исходный текст и фон
            button.textContent = text1;
            button.style.backgroundColor = "";
          } else {
            // В противном случае, устанавливаем альтернативный текст и фон
            button.textContent = text2;
            button.style.backgroundColor = "#00ff00"; // Зеленый цвет фона
          }
          // Инвертируем флаг
          isAlternate = !isAlternate;
        };
      }

      var button = document.getElementById("myButton");
      button.addEventListener("click", toggleTextAndBackground(button, "Джин-Клубника-Базилик", "Заявка принята!"));

      var button1 = document.getElementById("myButton2");
      button1.addEventListener("click", toggleTextAndBackground(button1, "Арбуз-Базилик", "Заявка принята!"));

      var button2 = document.getElementById("myButton3");
      button2.addEventListener("click", toggleTextAndBackground(button2, "Ром на груше - тархун", "Заявка принята!"));