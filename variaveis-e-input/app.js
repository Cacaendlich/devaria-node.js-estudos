const readLine = require('readline').createInterface ({   //config do readline   
    input: process.stdin,
    output: process.stdout
})

let name;

readLine.question('Digite seu nome: ', input => {
    name = input
    console.log(`Olá, ${name}`);  
});  

const minhaPrimeiraConstante = 'minha primeira constante';
console.log(minhaPrimeiraConstante)