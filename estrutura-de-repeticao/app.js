const listaArgumentos = process.argv.slice(2); //O comando console.log(process.argv) imprime no console os argumentos passados para o processo Node.js na linha de comando. O array process.argv contém o caminho para o executável do Node.js e o caminho para o arquivo JavaScript, além de quaisquer argumentos adicionais passados. //  A função slice é um método de array que permite retornar uma parte do array original com base em índices inicial e final especificados.

console.log('--------------------EXECUTANDO UM FOR--------------------');

for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`posicao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}

console.log('--------------------EXECUTANDO UM WHILE--------------------');

let controladorWhile = 0;

while(controladorWhile < listaArgumentos.length) {
    console.log(`posicao ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('--------------------EXECUTANDO UM DO WHILE--------------------');

let controladorDoWhile = 0;

do {
    console.log(`posicao ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
} while (listaArgumentos.length > controladorDoWhile);

console.log('--------------------EXECUTANDO UM FOR OF--------------------');

let controladorForOf = 0;

for(const argumento of listaArgumentos){
    console.log(`posicao ${controladorForOf} valor lido = ${argumento}`);
    controladorForOf++;
}