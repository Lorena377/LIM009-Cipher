window.cipher = {
  encode: (string,offset) => {
    /* Acá va tu código */
    let palabraCifrada = ""
    for (let i = 0; i < string.length; i++) {
        const codasccii = string.charCodeAt(i);
        const numerocifrado= (codasccii-65+offset)%26+65;
        const cifrado= String.fromCharCode(numerocifrado);
        //palabraCifrada = palabraCifrada + cifrado 
        palabraCifrada += cifrado
        
    }
    return(palabraCifrada);
  },
  decode: () => {
    /* Acá va tu código */
  }
};
