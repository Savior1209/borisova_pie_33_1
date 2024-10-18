function provercaChisla(a){
    var a = prompt("Введите число a");
    if (a == 0){
        alert("Получилось число:" + "10");
    } else if(a > 0){
        alert("Получилось число:"+ (parseInt(a) + 1));
    } else if(a < 0){
        alert("Получилось число:" + (parseInt(a) - 2));
    } else {
        alert("Введите корректное значение! ЧИСЛО!");
    }
}