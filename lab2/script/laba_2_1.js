function SchitaemPloshPerim() {
    let storA = document.querySelector('.storonA').value;
    //в переменную storA получаем свойство value объекта input (значение из строки ввода) 
    let storB = document.querySelector('.storonB').value;

    let Ploshad = storA * storB;
    let Perimetr =   2 * (parseFloat(storA) + parseFloat(storB));

    // создаём переменную, которая получает доступ к HTML элементу с указанным id
    let resultDiv = document.getElementById('result'); 
    // берём текстовое содержимое переменной resultDiv (без тегов) и записываем в HTML элемент значения
    resultDiv.innerHTML = `<p>Вы ввели: a = ${storA}, b = ${storB}</p>
                        <p>Площадь прямоугольника: ${Ploshad.toFixed(3)}</p>
                        <p>Периметр прямоугольника: ${Perimetr.toFixed(3)}</p>`;
}