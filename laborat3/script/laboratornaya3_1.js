function proveritChislo(){
    let a = document.getElementById("chisloA").value;
    let result;
    if (isNaN(a)){
        result = ("Введите корректное ЧИСЛО");
    } else if ((a >= 10) && (a <= 99) && (a%2 == 0)){
        result ="TRUE";
    }
    else{
        result ="FALSE";
    }
    document.getElementById("resultatProverki").value = result;
}
function clearVsePolnostiu(){
    document.getElementById("chisloA").value = '';
    document.getElementById("resultatProverki").value = '';
}