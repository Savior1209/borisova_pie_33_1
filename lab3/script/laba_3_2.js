function getZnachenie(){
    let a = prompt("Введите число a");
    if (a == 0){
        alert(`Вы ввели ${a}
    Получилось число: 10`);
    } else if(a > 0){
        alert(`Вы ввели ${a}
    Получилось число: ${(parseInt(a) + 1)}`);
    } else if(a < 0){
        alert(`Вы ввели ${a}
    Получилось число: ${(parseInt(a) - 2)}`);
    } else {
        alert("Введите корректное значение! ЧИСЛО!");
    }
    document.getElementById("result").innerHTML="Результат: " + result;
}

