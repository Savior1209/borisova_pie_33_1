function proverkaVvoda(message) {
    let input;
    do {
        input = prompt(message);

        // Проверяем, является ли значение числом и больше ли оно 0
        if (isNaN(input) || parseInt(input) <= 0) {
            alert("Пожалуйста, введите корректное целое число. ");
        } else {
            return parseInt(input); // Превращаем строку в число
        }
    } while (true);
}

function calculateByte() {
var sizeFile = proverkaVvoda("Введите размер файла в байтах a:");

var sizeinKb = Math.floor (sizeFile / 1024);


let resultDiv = document.getElementById('result');
resultDiv.innerHTML =  `<p>Вы ввели размер файла (байт): a = ${sizeFile}</p>
                       <p>Размер файла в Килобайт: ${sizeinKb.toFixed(3)}</p> `;
}