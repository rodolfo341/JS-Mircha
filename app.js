
let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));
let array1 = [];
let array2 = [];
let array3 = [];

for (let i = 1; i <= num1; i++) {    
    if ( num1 % i == 0 ) {
        array1.push(i);
    }    
}
document.getElementById("parrafo1").innerHTML = "Los divisores de " + num1 + " son " + array1;

for (let i = 1; i <= num2; i++) {    
    if ( num2 % i == 0 ) {
        array2.push(i);
    }    
}
document.getElementById("parrafo2").innerHTML = "Los divisores de " + num2 + " son " + array2;

if ( array1.length <= array2.length) {
    
    for (let i = 0; i <= array1.length - 1; i++) {
        for (let j = 0; j <= array2.length; j++) {
            if ( array1[i] == array2[j]) {
                array3.push(array1[i]);
            }        
        }    
    }

}else{

    for (let i = 0; i <= array2.length - 1;i++) {
        for (let j = i; j <= array1.length; j++) {
            if ( array1[i] === array2[j]) {
                array3.push(array2[i]);
            }        
        }    
    }

}


document.getElementById("parrafo3").innerHTML = "Los divisores comunes son "+ array3;

