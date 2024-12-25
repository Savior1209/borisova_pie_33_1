function izmenenieMassiva(){
    let M = document.getElementById('chisloM').value;
    let N = document.getElementById('chisloN').value;
    let arrayM = [];
    let arrayMN = [];
    for (let i = 0; i < M; i++) {
        arrayM[i] = (Math.random()*100).toFixed(0);
    }
    for (let index = 0; index < M; index++) {
        let array = [];
        for (let j = 0; j < N; j++) {
            array.push(arrayM[index]);
        }
        arrayMN.push(array);
        document.getElementById('massItog').innerHTML += `<p>${array}</p>`;
    }
    document.getElementById('massivB').innerHTML = arrayM;
}

function clearVsePolnostiu(){
    document.getElementById("chisloM").value = "";
    document.getElementById("chisloN").value = ""
    document.getElementById("massItog").innerHTML = "";
    document.getElementById("massivB").innerHTML = "";
}