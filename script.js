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




      


//
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
      //кнопки 1 ряд
      var button = document.getElementById("myButton");
      button.addEventListener(
        "click",
        toggleTextAndBackground(
          button,
          "Джин-Клубника-Базилик",
          "Заявка принята!"
        )
      );

      var button1 = document.getElementById("myButton2");
      button1.addEventListener(
        "click",
        toggleTextAndBackground(button1, "Арбуз-Базилик", "Заявка принята!")
      );

      var button2 = document.getElementById("myButton3");
      button2.addEventListener(
        "click",
        toggleTextAndBackground(
          button2,
          "Ром на груше - тархун",
          "Заявка принята!"
        )
      );

      var button3 = document.getElementById("myButton4");
      button3.addEventListener(
        "click",
        toggleTextAndBackground(
          button3,
          " Мокровь-Апльсин-Грейфрут",
          "Заявка принята!"
        )
      );

      var button4 = document.getElementById("myButton5");
      button4.addEventListener(
        "click",
        toggleTextAndBackground(button4, "Ром-Банан", "Заявка принята!")
      );

      var button5 = document.getElementById("myButton6");
      button5.addEventListener(
        "click",
        toggleTextAndBackground(
          button5,
          "Алоэ-Джин-Красный бизилик",
          "Заявка принята!"
        )
      );
      //кнопки 2 ряд
      var button6 = document.getElementById("myButton7");
      button6.addEventListener(
        "click",
        toggleTextAndBackground(button6, "Кислый", "Заявка принята!")
      );

      var button7 = document.getElementById("myButton8");
      button7.addEventListener(
        "click",
        toggleTextAndBackground(button7, "Сладкий", "Заявка принята!")
      );

      var button8 = document.getElementById("myButton9");
      button8.addEventListener(
        "click",
        toggleTextAndBackground(button8, "Кисло-Сладкий", "Заявка принята!")
      );

      var button9 = document.getElementById("myButton10");
      button9.addEventListener(
        "click",
        toggleTextAndBackground(button9, "Горький", "Заявка принята!")
      );

      var button10 = document.getElementById("myButton11");
      button10.addEventListener(
        "click",
        toggleTextAndBackground(button10, "Соленый", "Заявка принята!")
      );
      //3ряд кнопки
      var button11 = document.getElementById("myButton12");
      button11.addEventListener(
        "click",
        toggleTextAndBackground(button11, "Крепкий", "Заявка принята!")
      );

      var button12 = document.getElementById("myButton13");
      button12.addEventListener(
        "click",
        toggleTextAndBackground(button12, "Не крепкий", "Заявка принята!")
      );
      //сборщик данных
      // Функция для сбора данных с кнопок и отправки в форму
      function collectDataAndSubmit(button, formId) {
        // Получаем текст с кнопки
        var buttonText = button.textContent;
      };
        // Получаем ссылку на

    
// сборщик данных

        //сборщик данных
        // Функция для сбора данных с кнопок и отправки в форму
        function collectDataAndSubmit(button) {
          // Получаем текст с кнопки
          var buttonText = button.textContent;

          // Получаем ссылку на поле данных в форме
          var dataField = document.getElementById("data");

          // Устанавливаем собранные данные в поле данных формы
          dataField.value = buttonText;
        }

        // Добавляем обработчики события "click" для каждой кнопки
        var buttons = document.querySelectorAll(".button");
        buttons.forEach(function (button) {
          button.addEventListener("click", function () {
            collectDataAndSubmit(button);
          });
        });


//форма с данными
        // Создаем массив для хранения собранных данных
        var собранныеДанные = [];

        // Функция для сбора данных с кнопок и отправки в форму
        function collectDataAndSubmit(button) {
          // Получаем текст с кнопки
          var buttonText = button.textContent;

          // Добавляем текст в массив собранных данных
          собранныеДанные.push(buttonText);

          // Получаем ссылку на поле данных в форме
          var dataField = document.getElementById("data");

          // Устанавливаем собранные данные в поле данных формы, разделяя их запятой
          dataField.value = собранныеДанные.join(", ");
        }

        // Добавляем обработчики события "click" для каждой кнопки
        var buttons = document.querySelectorAll(".button");
        buttons.forEach(function (button) {
          button.addEventListener("click", function () {
            collectDataAndSubmit(button);
          });
        });




          // Создаем массив для хранения собранных данных
          var собранныеДанные = [];

          // Функция для сбора данных с кнопок и отправки в форму
          function collectDataAndSubmit(button) {
            // Получаем текст с кнопки
            var buttonText = button.textContent;
  
            // Проверяем, есть ли этот текст в массиве
            var index = собранныеДанные.indexOf(buttonText);
  
            if (index !== -1) {
              // Если текст уже есть в массиве, удаляем его
              собранныеДанные.splice(index, 1);
            } else {
              // Иначе добавляем текст в массив
              собранныеДанные.push(buttonText);
            }
  
            // Получаем ссылку на поле данных в форме
            var dataField = document.getElementById("data");
  
            // Устанавливаем собранные данные в поле данных формы, разделяя их запятой
            dataField.value = собранныеДанные.join(", ");
          }
  
          // Добавляем обработчики события "click" для каждой кнопки
          var buttons = document.querySelectorAll(".button");
          buttons.forEach(function (button) {
            button.addEventListener("click", function () {
              collectDataAndSubmit(button);
            });
          });


          // Создаем массив для хранения собранных данных
        var собранныеДанные = [];

        // Функция для обработки нажатия на кнопку
        function handleButtonClick(button) {
          // Получаем текст с кнопки
          var buttonText = button.textContent;

          // Проверяем, есть ли этот текст в массиве
          var index = собранныеДанные.indexOf(buttonText);

          if (index !== -1) {
            // Если текст уже есть в массиве, удаляем его
            собранныеДанные.splice(index, 1);
          } else {
            // Иначе добавляем текст в массив
            собранныеДанные.push(buttonText);
          }

          // Получаем ссылку на поле данных в форме
          var dataField = document.getElementById("data");

          // Устанавливаем собранные данные в поле данных формы, разделяя их запятой
          dataField.value = собранныеДанные.join(", ");
        }

        // Добавляем обработчики события "click" для каждой кнопки
        var buttons = document.querySelectorAll(".button");
        buttons.forEach(function (button) {
          button.addEventListener("click", function () {
            handleButtonClick(button);
          });
        });






        var collectedData = [];

                                        function handleButtonClick(button) {
                                          var buttonText = button.textContent;
                                          var index = collectedData.indexOf(buttonText);

                                          if (index !== -1) {
                                            collectedData.splice(index, 1);
                                          } else {
                                            collectedData.push(buttonText);
                                          }

                                          var dataField = document.getElementById("data");
                                          dataField.value = collectedData.join(", ");
                                        }

                                        var buttons = document.querySelectorAll(".button");
                                        buttons.forEach(function (button) {
                                          button.addEventListener("click", function () {
                                            handleButtonClick(button);
                                          });
                                        });

                                        var resetButton = document.getElementById("resetButton");
                                        resetButton.addEventListener("click", function () {
                                          collectedData = [];
                                          var dataField = document.getElementById("data");
                                          dataField.value = "";
                                        });

                                        var submitButton = document.getElementById("submitButton");
                                        submitButton.addEventListener("click", function ()) {
                                          // Отправьте данные на сервер или выполните другие действия по вашему выбору
                                          // collectedData содержит выбранные элементы
                                          alert("Отправлено: " + collectedData.join(", "))};

                                          //отправк
                                          function doPost(e) {
                          var doc = DocumentApp.openById('1Ftx2MOi1rxqAAtk0G12QPkgRzOhwhaZpJmPvwK_GZXA'); // Замените YOUR_DOCUMENT_ID на реальный идентификатор документа
                          var body = doc.getBody();
                          var formData = e.parameter.data; // Параметр 'data' соответствует имени вашего поля данных

                          // Создаем новый параграф для каждой отправленной записи
                          var newParagraph = body.appendParagraph(formData);

                          // Опционально, можно добавить временную метку
                          var now = new Date();
                          newParagraph.appendText("Отправлено: " + now);

                          return ContentService.createTextOutput('Данные успешно отправлены.');
                        };