function polluchenieReuslts(){
    var x = document.getElementById('xTextBox').value;
    const a = 2.73;
    const b = 1.68;
    var result;
    x = parseFloat(x);
    switch(x){
        case -2: 
        result = Math.sin(Math.log10(Math.abs(x)));
        break;
        case 3: 
        result = Math.pow( 4 * x + b,2);
        break;
        case 5: 
        result = (1/(x * x + a * a));
        break;
    }
    document.getElementById("resultTextBox").value = parseFloat(result).toFixed(3);
}
function clearVsePolnostiu(){
    document.getElementById("xTextBox").value = '';
    document.getElementById("resultTextBox").value = '';
}