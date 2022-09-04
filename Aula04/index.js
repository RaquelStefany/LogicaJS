// if = Pode ser executado sozinho
// Para executar um else ou else if é necessário ter um if
// É possível ter inúmeros else ifs
// Só é possível ter um else no if

const hora = 13;

if(hora >= 0 && hora <= 11){
    console.log('Bom Dia!!');
}
else if(hora >= 12 && hora <= 17){
    console.log('Boa Tarde!!');
}
else if(hora >= 18 && hora <= 23){
    console.log('Boa Noite!!');
}
else{
    console.log('Olá!!');
}

console.log('');

const tenhoGrana = 0;

if(tenhoGrana){
    console.log('Vou sair de casa');
}
else{
    console.log('Não vou sair de casa');
}