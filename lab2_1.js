function promptForFloat(message) {
    let input;
    do {
      input = prompt(message);

      // Проверяем, является ли значение числом
      if (isNaN(a) || a <= 0) {
        alert("Пожалуйста, введите корректное вещественное число.");
        return;
      }
    } while (true);
  }

  function calculateRectangleProperties() {
    let a = promptForFloat("Введите длину стороны a:");
    let b = promptForFloat("Введите длину стороны b:");

    let S = a * b;
    let P = 2 * (a + b);

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Вы ввели: a = ${a}, b = ${b}</p>
                           <p>Площадь прямоугольника: ${S}</p>
                           <p>Периметр прямоугольника: ${P}</p>`;
  }