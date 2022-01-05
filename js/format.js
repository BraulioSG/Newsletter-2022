let notas = document.getElementsByClassName("nota");

for(let n = 0; n < notas.length; n++){
    if(n%2 == 0){
        notas[n].children[0].classList.add("par");
        notas[n].children[1].classList.add("par");
    }
    else{
        notas[n].children[0].classList.add("impar");
        notas[n].children[1].classList.add("impar");
    }
}