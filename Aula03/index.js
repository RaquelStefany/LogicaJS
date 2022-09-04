// Valores avaliados em Falsy(false) = 0, "", '', ``, null, undefined, NaN

function falaOi(){
    return "Oi";
}

let vaiExecutar = false;

// Se variável vaiExecutar for verdadeira, a função falaOi() será executado, caso contrario retornará false
console.log(vaiExecutar && falaOi());

// Retornará expressão primeira expressão verdadeira, no caso 'Raquel'
console.log(0 || false || null || 'Raquel' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);