function proverkaVvoda(message) {
    let input;
    do {
        input = prompt(message);

        // Проверяем, является ли значение числом и больше ли оно 0
        if (isNaN(input) || parseFloat(input) <= 0) {
            alert("Пожалуйста, введите корректное вещественное число. "); // Всплывающее окно с сообщением
        } 
        else {
            return parseFloat(input); // Превращаем строку в число
        }
    } while (true);
}

function SchitaemPloshPerim() {
let storA = proverkaVvoda("Введите длину стороны a:");
let storB = proverkaVvoda("Введите длину стороны b:");

let Ploshad = storA * storB;
let Perimetr = 2 * (storA + storB);

let resultDiv = document.getElementById('result');
resultDiv.innerHTML = `<p>Вы ввели: a = ${storA}, b = ${storB}</p>
                       <p>Площадь прямоугольника: ${Ploshad.toFixed(3)}</p>
                       <p>Периметр прямоугольника: ${Perimetr.toFixed(3)}</p>`;
}