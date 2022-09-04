// Operadores de Comparação
//   > Maior que
//   >= Maior ou igual a 
//   < Menor que
//   <= Menor que e igual a
//   == Igualdade (valor)
//   === Igualdade estrita (valor e tipo)
//   != Diferente (valor)
//   !== Diferente estrito (valor e tipo)

const num1 = 10;
const num2 = 10;

const exp1 = num1 > num2;
console.log(exp1);

const exp2 = num1 >= num2;
console.log(exp2);

const exp3 = num1 < num2;
console.log(exp3);

const exp4 = num1 <= num2;
console.log(exp4);

// == Faz uma dedução de tipo, como por exemplo Number 10 é igual a String 10
// Por esse motivo não é recomendado usar == para comparação
const exp5 = num1 == num2;
console.log(exp5);

const exp6 = num1 === num2;
console.log(exp6);

// != Segue a mesma logica do ==
// Recomendado utilizar !==
const exp7 = num1 != num2;
console.log(exp7);

const exp8 = num1 !== num2;
console.log(exp8);