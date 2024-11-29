const a = 2.73;
const b = 1.68;
var x = prompt("Введите значение x:");
var result;

if (x <= 1){
    result = (Math.sin(Math.log(Math.abs(x))).toFixed(3));
    alert(result.toFixed(3));
}else if (x > 1 && x <= 3){
    result = 4 * x + b * b;
    alert(result.toFixed(3));

}else if (x > 3){
    result = 1/ (x*x + a*a);
    alert(result.toFixed(3));
    
}else{
    alert("Что вы хотите получить, вводя что-то не то??");
}

