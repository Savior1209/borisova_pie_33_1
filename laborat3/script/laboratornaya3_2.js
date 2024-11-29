function getZnachenie(){
    let a = document.getElementById("chisloA").value;
    let result;
    if (a == 0){
        result =  10;
    } else if(a > 0){
        result = parseInt(a) + 1;
    } else if(a < 0){
        result = parseInt(a) - 2;
    } else {
        result = "Введите корректное значение! ЧИСЛО!";
    }
    document.getElementById("resultat").value = result;
}

function clearVsePolnostiu(){
    document.getElementById("chisloA").value = '';
    document.getElementById("resultat").value = '';
}