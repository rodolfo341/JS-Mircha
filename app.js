

do {
    
    let num = parseInt(prompt("Ingrese numero a comprobar"));
    let numDiv = parseInt(prompt("ingrese numero 2, 3, 5 o 7"));

    if ( num % numDiv == 0){
        document.getElementById("parrafo").innerHTML = "El numero " + num + " es divisible por " + numDiv;
    }else{
        document.getElementById("parrafo").innerHTML = "El numero " + num + " no es divisible por " + numDiv;
    }

} while (!( numDiv == 2 || numDiv == 3 || numDiv == 5 || numDiv == 7 ));

