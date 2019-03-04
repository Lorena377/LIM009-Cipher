
/* CIFRANDO UNA LETRA */
/*const letra = "A";
const desplazamiento = 3;
const ascii = letra.charCodeAt(0);

const numbercifrado = (ascii - 65 + desplazamiento) % 26 + 65;
//console.log(numbercifrado);
//cifrando numero/

const resultado = String.fromCharCode(numbercifrado);
console.log(resultado)

/* CIFRANDO UNA PALABRA */

//const textoACifrar = document.getElementById("texto-a-cifrar");
const botonCifrar = document.getElementById("boton-cifrar");
//const offsetCifrar = document.getElementById("offset-cifrar");
const resultadoCifrado = document.getElementById("resultado");

botonCifrar.addEventListener("click", () => {
    const textoACifrar = document.getElementById("texto-a-cifrar").value;
    //console.log(textoACifrar);
    const offsetCifrar = document.getElementById("offset-cifrar").value;
    //console.log(offsetCifrar);
    // cipher.encode(textoAcifrar,offsetCifrar);
    resultadoCifrado.innerHTML = cipher.encode(textoACifrar, offsetCifrar);
});

//MOSTRANDO Y OCULTANDO PANTALLAS//
const primeraPantalla = document.getElementById("primera-pantalla");
const cifrar = document.getElementById("cifrar");
const decifrar = document.getElementById("decifrar");
const segundaPantalla = document.getElementById("segunda-pantalla");
const terceraPantalla = document.getElementById("tercera-pantalla");
const botonFinCifrado = document.getElementById("finalizar-cifrado");
const botonFinDecifrado = document.getElementById("finalizar-decifrado")
cifrar.addEventListener("click", () => {
    primeraPantalla.classList.add('hide');
    segundaPantalla.classList.remove('hide')
});

decifrar.addEventListener("click", () => {
    primeraPantalla.classList.add("hide");
    terceraPantalla.classList.remove("hide")
});

botonFinCifrado.addEventListener("click", () => {
    primeraPantalla.classList.remove("hide")
    segundaPantalla.classList.add("hide")
});

botonFinDecifrado.addEventListener("click", () => {
    primeraPantalla.classList.remove("hide")
    segundaPantalla.classList.add("hide")
    terceraPantalla.classList.add("hide")
});

/*DECIFRANDO UNA LETRA*/
/*const letraDeCifrada = "A";
const desplazamientoDecifrado = 3;
const ascci = letraDeCifrada.charCodeAt(i);
const numberDecifrado = (ascii - 90 - desplazamientoDecifrado) % 26 + 90;
/* DECIFANDO UNA PALABRA */

//const textoADecifrar = document.getElementById("texto-a-decifrar");
const botonDecifrar = document.getElementById("boton-decifrar");
//const offsetDecifrar = document.getElementById("offset-decifrar");
const resultadoDecifrado = document.getElementById("resultado2");

botonDecifrar.addEventListener("click", () => {
    const textoADecifrar = document.getElementById("texto-a-decifrar").value;
    //console.log(textoADecifrar);
    const offsetDecifrar = document.getElementById("offset-decifrar").value;
    //console.log(offsetDecifrar);
    resultadoDecifrado.innerHTML = cipher.decode(textoADecifrar, offsetDecifrar);
});