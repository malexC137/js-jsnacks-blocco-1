var word1 = prompt("Inserisci una parola");
var word2 = prompt("Inserisci una seconda parole");
var longWord
var shortWord

if (word1.length > word2.length) {
    longWord = word1
    shortWord = word2
    console.log("La parola più lunga è " + word1 + ", mentre la parola più corta è " + word2)
    document.getElementById("result").innerHTML = "La parola più lunga è " + word1 + ", mentre la parola più corta è " + word2;
} else if (word2.length > word1.length) {
    longWord = word2
    shortWord = word1
    console.log("La parola più lunga è " + word2 + ", mentre la parola più corta è " + word1)
    document.getElementById("result").innerHTML = "La parola più lunga è " + word2 + ", mentre la parola più corta è " + word1;
} else {
    console.log("Entrambe le parole hanno la stessa lunghezza");
    document.getElementById("result").innerHTML = "Entrambe le parole hanno la stessa lunghezza";
}