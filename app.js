
let frase = prompt("ingrese frase");
let contA = 0;
let contE = 0;
let contI = 0;
let contO = 0;
let contU = 0;
let cadena = "";

for (let i = 0; i < frase.length; i++) {
    if( frase.charAt(i) === "a" ) {
        contA++;
    }else if( frase.charAt(i) === "e" ) {
        contE++;
    }else if( frase.charAt(i) === "i" ) {
        contI++;
    }else if( frase.charAt(i) === "o" ) {
        contO++;
    }else if( frase.charAt(i) === "u" ) {
        contU++;
    }    
} 
document.getElementById("parrafoA").innerHTML = "Hay " + contA + " letras 'a' ";
document.getElementById("parrafoE").innerHTML = "Hay " + contE + " letras 'e' ";
document.getElementById("parrafoI").innerHTML = "Hay " + contI + " letras 'i' ";
document.getElementById("parrafoO").innerHTML = "Hay " + contO + " letras 'o' ";
document.getElementById("parrafoU").innerHTML = "Hay " + contU + " letras 'u' ";

