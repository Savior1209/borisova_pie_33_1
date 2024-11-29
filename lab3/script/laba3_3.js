function poluchitZnachenia(){

    x = document.getElementById("xTextBox").value;
    const a = 2.73;
    const b = 1.68;

    var result;

    if (x <= 1){
        result = Math.sin(Math.log10(Math.abs(x)));
    } else if (x > 1 && x <= 3){
        result = 4 * x + b * b;
    } else if (x > 3){
        result = 1/ (x*x + a*a);
    }
    //document.getElementById("resultContainer").innerHTML="Результат: " + " " + result.toFixed(3);
    document.getElementById("resultTextBox").value = parseFloat(result).toFixed(3);
}