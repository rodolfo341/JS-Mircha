
let frase = prompt("ingrese un numero");
let letra = "a";
let cont = 0;

for (let i = 0; i < frase.length; i++) {
    if(frase.charAt(i) === letra){
        cont++;
    }    
} 


document.getElementById("parrafo1").innerHTML = "La letra " + letra + " se repite " + cont + " veces";


