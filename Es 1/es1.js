var num1 = parseInt(prompt("Scrivi un numero"));
var num2 = parseInt(prompt("Scrivi un altro numero"));


if(Number.isNaN(num1) ||  Number.isNaN(num2)) {
    console.log("Uno o entrambi i numeri non sono validi")
} else {
    var numeroMaggiore

    if (num1 > num2) {
        numeroMaggiore = num1
    } else if (num1 < num2) {
        numeroMaggiore = num2
    } 

    if (typeof numeroMaggiore === "number") {
        console.log("Il numero maggiore è " + numeroMaggiore);
    } else {
        console.log("I due numeri sono uguali");
    }

    
}



