window.cipher = {
  encode: (textoACifrar,offsetCifrar) => {
    /* Acá va tu código */
    let palabraCifrada = "";
for (let i = 0; i < textoACifrar.length; i++) {
    const codasccii = textoACifrar.toUpperCase().charCodeAt(i);
    const numerocifrado = (codasccii - 65 + parseInt(offsetCifrar)) % 26 + 65;
    const cifrado = String.fromCharCode(numerocifrado);
    //palabraCifrada = palabraCifrada + cifrado 
    palabraCifrada += cifrado;
}
    return palabraCifrada;
},

  decode: (textoADecifrar,offsetDecifrar) => {
    /* Acá va tu código */
    let textoDecifrado = '';
    for (let i = 0; i < textoADecifrar.length; i++) {
        const codasccii = textoADecifrar.toUpperCase().charCodeAt(i);
        const numerocifrado = (codasccii - 90 - parseInt(offsetDecifrar)) % 26 + 90;
        const decifrado = String.fromCharCode(numerocifrado);
        //palabraDeCifrada = palabraDeCifrada + cifrado 
        textoDecifrado += decifrado;
 }
    return textoDecifrado;
    }
      }