window.cipher = {
  encode: (string,offset) => {
    /* Acá va tu código */
    let palabraCifrada = ""
    for (let i = 0; i < string.length; i++) {
      const codasccii = string.charCodeAt(i);
      const numerocifrado = (codasccii - 65 + parseInt(offset)) % 26 + 65;
      const cifrado = String.fromCharCode(numerocifrado);
      //palabraCifrada = palabraCifrada + cifrado 
      palabraCifrada += cifrado
    }
    return palabraCifrada;
  },
  decode: (string1,offset1) => {
    /* Acá va tu código */
    let textoDecifrado = '';
    for (let i = 0; i<palabraDeCifrada.length; i++) {
        const codasccii = palabraDeCifrada.charCodeAt(i);
        const numerocifrado = (codasccii - 90 - parent(offset)) % 26 + 90;
        const decifrado = String.fromCharCode(numerocifrado);
        //palabraDeCifrada = palabraDeCifrada + cifrado 
        textoDecifrado += decifrado;
    }
    console.log(textoDecifrado);
    return textoDecifrado;
  }
}