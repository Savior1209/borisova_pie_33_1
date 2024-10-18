function SchitaemPloshPerim() {
    let sizeFile = document.querySelector('.razmerBit').value; 
    //в переменную sizeFile получаем свойство value объекта input (значение из строки ввода) 
    let sizeinKb = Math.floor(sizeFile / 1024); //округляет число до ближайшего меньшего целого числа

    // создаём переменную, которая получает доступ к HTML элементу с указанным id
    let resultDiv = document.getElementById('result');
    // берём текстовое содержимое переменной resultDiv (без тегов) и записываем в HTML элемент значения
    resultDiv.innerHTML =  `<p>Вы ввели размер файла (байт): ${sizeFile}</p>
                       <p>Размер файла в Килобайт: ${sizeinKb.toFixed(3)}</p> `;
}