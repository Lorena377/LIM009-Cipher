
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
const frase = "ana"
const palabra = frase.toUpperCase();
const offset = 3

let palabraCifrada = ""
for (let i = 0; i < palabra.length; i++) {
    const codasccii = palabra.charCodeAt(i);
    const numerocifrado = (codasccii - 65 + offset) % 26 + 65;
    const cifrado = String.fromCharCode(numerocifrado);
    //palabraCifrada = palabraCifrada + cifrado 
    palabraCifrada += cifrado

}

//MOSTRANDO Y OCULTANDO PANTALLAS//

const textoACifrar = document.getElementById("texto-a-cifrar");
const botonCifrar = document.getElementById("boton-cifrar");
const offsetCifrar = document.getElementById("offset-cifrar");
const resultadoCifrado = document.getElementById("resultado")
botonCifrar.addEventListener("click", () => {
    const textoACifrar = document.getElementById("texto-a-cifrar").value;
    const offsetCifrar = document.getElementById("offset-cifrar").value;

    resultadoCifrado.innerHTML = cipher.encode(textoACifrar, offsetCifrar);
});


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
})

decifrar.addEventListener("click", () => {
    primeraPantalla.classList.add("hide");
    terceraPantalla.classList.remove("hide")
})

botonFinCifrado.addEventListener("click", () => {
    primeraPantalla.classList.remove("hide")
    segundaPantalla.classList.add("hide")
})

botonFinDecifrado.addEventListener("click", () => {
    primeraPantalla.classList.remove("hide")
    segundaPantalla.classList.add("hide")
    terceraPantalla.classList.add("hide")
})

/*DECIFRANDO UNA LETRA*/
/*const letraDeCifrada = "A";
const desplazamientoDecifrado = 3;
const ascci = letraDeCifrada.charCodeAt(i);

const numberDecifrado = (ascii - 90 - desplazamientoDecifrado) % 26 + 90;


/* DECIFANDO UNA PALABRA */
const fraseDecifrada = "ana"
const palabraDeCifrada = fraseDecifrada.toUpperCase();
const offsetDecifrado = 3

let textoDecifrado = '';
for (let i = 0; i < palabraDeCifrada.length; i++) {
    const codasccii = palabraDeCifrada.charCodeAt(i);
    const numerocifrado = (codasccii - 90 - offset) % 26 + 90;
    const decifrado = String.fromCharCode(numerocifrado);
    //palabraDeCifrada = palabraDeCifrada + cifrado 
    textoDecifrado += decifrado;
}
//console.log(textoDecifrado);

//console.log(window.cipher.encode(palabraDeCifrada, offset));
