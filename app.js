
let frase = prompt("ingrese frase");
let cont = 0;
let cadena = "";

for (let i = 0; i < frase.length; i++) {
    if(    frase.charAt(i) === "a" 
        || frase.charAt(i) === "e"
        || frase.charAt(i) === "i"
        || frase.charAt(i) === "o"
        || frase.charAt(i) === "u"
        || frase.charAt(i) === "A"
        || frase.charAt(i) === "E"
        || frase.charAt(i) === "I"
        || frase.charAt(i) === "O"
        || frase.charAt(i) === "U"
         ){
        cadena = cadena + frase.charAt(i);
    }    
    
} 
document.getElementById("parrafo1").innerHTML = cadena;

