function verificarPalindromo(palavra) {   
    palavra = palavra.replace(/\s/g, '').toLowerCase();
    
    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) {
            return "A palavra não é um palíndromo.";
        }
    }

    return "A palavra é um palíndromo!";
}
let palavraUsuario = prompt("Digite uma palavra:");
console.log(verificarPalindromo(palavraUsuario));
