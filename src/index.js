/* CIFRANDO UNA LETRA */
const letra= "A";
const desplazamiento= 3;
const ascii= letra.charCodeAt(0);

const numbercifrado= (ascii-65+desplazamiento)%26+65;
//console.log(numbercifrado);
//cifrando numero/

const resultado= String.fromCharCode(numbercifrado);
console.log(resultado)

/* CIFRANDO UNA PALABRA */
const frase = "ana"
const palabra= frase.toUpperCase();
const offset= 3

let palabraCifrada = ""
for (let i = 0; i < palabra.length; i++) {
    const codasccii = palabra.charCodeAt(i);
    const numerocifrado= (codasccii-65+offset)%26+65;
    const cifrado= String.fromCharCode(numerocifrado);
    //palabraCifrada = palabraCifrada + cifrado 
    palabraCifrada += cifrado
    
}
console.log(palabraCifrada);

console.log(window.cipher.encode(palabra,offset));

/*const decifrar = document.getElementById("decifrar");
*/