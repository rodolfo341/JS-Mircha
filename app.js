
let frase = prompt("ingrese un numero");
let cont = 0;

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
        cont++;
    }    
} 


document.getElementById("parrafo1").innerHTML = "Total de vocales es " + cont;


