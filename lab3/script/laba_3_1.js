function proverkaIstinnosti(a){
    var a = prompt(a);
    if (isNaN(a)){
        alert("Введите корректное ЧИСЛО");
    } else if ((a >= 10) && (a <= 99) && (a%2 == 0)){
        alert("TRUE");
    }
    else{
        alert("FALSE");
    }
    
}