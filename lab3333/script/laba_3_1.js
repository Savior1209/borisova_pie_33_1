function proveritChislo(){
    let a = prompt("Введите число для проверки");
    if (isNaN(a)){
        alert("Введите корректное ЧИСЛО");
    } else if ((a >= 10) && (a <= 99) && (a%2 == 0)){
        alert(`Вы ввели ${a}
    Результат: TRUE`);
    }
    else{
        alert(`Вы ввели ${a}
    Результат: FALSE`);
    }
}

    
