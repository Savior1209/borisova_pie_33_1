function izmenenieMassiva(){ 
    let M = document.getElementById('chisloM').value; 
    let N = document.getElementById('chisloN').value; 
    let arrayIsh = []; 
    let lastPolozitColon = -1; 
    for (let index = 0; index < M; index++) { 
        arrayIsh[index] = []; 
        for (let j = 0; j < N; j++) { 
            arrayIsh[index][j] = ((Math.random()-0.5)*2*100).toFixed(0); 
        } 
        document.getElementById('massItog').innerHTML += `<p>${arrayIsh[index]}</p>`; 
    } 
    for (let j = N-1; j >= 0; j--) { 
        let posit = true; 
        for (let i = 0; i < M; i++) {        
            if (arrayIsh[i][j] <= 0 ){ 
                posit = false; 
                break; 
            }         
        } 
        if (posit){ 
            lastPolozitColon = j; 
            break; 
        }   
    } 
    if (lastPolozitColon !== -1){ 
        let zamena; 
        for (let i = 0; i < M; i++) { 
            zamena = arrayIsh[i][0]; 
            arrayIsh[i][0] = arrayIsh[i][lastPolozitColon]; 
            arrayIsh[i][lastPolozitColon] = zamena; 
        } 
    } 
    for (let i = 0; i < arrayIsh.length; i++) {
        document.getElementById('massItog2').innerHTML += `<p>${arrayIsh[i]}</p>`;
    }
}
function clearVsePolnostiu(){
    document.getElementById("chisloM").value = "";
    document.getElementById("chisloN").value = ""
    document.getElementById("massItog").innerHTML = "";
    document.getElementById("massItog2").innerHTML = "";
}