
//const readLine = require('readline').createInterface({
   // input: process.stdin,
   // output: process.stdout 
//});
//Esse trecho de código está utilizando o módulo readline do Node.js para criar uma interface para leitura de entrada pelo usuário na linha de comando.
//O código utiliza a função require do Node.js para carregar o módulo readline. A função createInterface é chamada em seguida, criando uma interface para leitura de entrada na linha de comando.
//O objeto de configuração passado para a função createInterface possui duas propriedades:
//input: define a entrada de dados para a interface de leitura, neste caso process.stdin, que é a entrada padrão do processo Node.js.
//output: define a saída de dados da interface de leitura, neste caso process.stdout, que é a saída padrão do processo Node.js.
//O resultado dessa configuração é que, quando o código chama a função readLine.question(), a entrada do usuário é lida da linha de comando e a saída é exibida na linha de comando.
//Essa interface de leitura é comumente usada para criar programas de linha de comando interativos em Node.js, permitindo que o usuário insira dados diretamente na linha de comando.

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
});

console.log('-----------------------------------------------------------------------------------------------------------------')
console.log(' Esse programa verifica se você é maior de 18 anos e se tem Habilitação, para saber se você pode dirigir o kart!');
console.log(' Alem disso vamos verificar se você está na lista de presença do horário!');
console.log('-----------------------------------------------------------------------------------------------------------------')

let age;


readLine.question('Ano de nascimento: ', ano => {
    age = 2023 - ano;

    if (!(age >= 18)) {
        console.log('você não é maior de idade, não pode dirigir.');
    } else {
        readLine.question('Possui habilitação: (Sim/Não)', habilitacao => {
            if((habilitacao.toUpperCase() !== 'SIM')) {
                console.log('você não possui habilitação, não pode dirigir.');
            } else {
                readLine.question('Digite seu nome: ', name => {
                    switch(name.toUpperCase()) {
                        case "CAMILA":
                            console.log('Bem Vinda ao Kart Camila!')
                        break;

                        case "RICARDO":
                            console.log('Bem Vinda ao Kart Ricardo!')
                        break;

                        case "HELENA":
                            console.log('Bem Vinda ao Kart Helena!')
                        break;

                        default:
                            console.log('Nome nã encontrado!')
                    }
                });
            }
        });
    }
});

