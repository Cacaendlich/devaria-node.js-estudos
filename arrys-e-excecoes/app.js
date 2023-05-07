try {
    // Lista de produtos disponíveis
    const listaProtudosDisponiveis = [
        "pão",
        "leite",
        "café",
        "suco de laranja",
        "queijo",
        "presunto",
        "bolo",
    ];

    // listaArgumentos: é uma variável que armazena os argumentos passados na linha de comando.
    // process.argv: é um objeto que fornece acesso aos argumentos passados ​​na linha de comando ao executar um arquivo JavaScript no Node.js. 
    // slice(2): é um método de array que retorna uma cópia de um array a partir de um índice especificado até o final. No caso deste código, o slice(2) é utilizado para pegar os argumentos passados na linha de comando, ignorando os dois primeiros argumentos que não são úteis para a aplicação.
    const listaArgumentos = process.argv.slice(2);

    // filter(): é um método de array que cria um novo array com todos os elementos que passam em um teste implementado pela função fornecida.
    // find(): é um métodoo de array que encontra o 1º registro da lista que atendende uma condiçaõ fornecida, e retorna o mesmo.
    // produto e argumnto: são os parâmetros da função de callback passada como argumento para o método filter(). Esse parâmetro representa cada elemento do array listaProtudosDisponiveis e listaArgumentos.
    // =>: é a sintaxe utilizada para definir funções arrow function.
    const listaDeProdutosSolicitadosDisponiveis = listaProtudosDisponiveis.filter(produto => {
        return listaArgumentos.find(argumento => argumento === produto);
    });

    // O método forEach() é utilizado em arrays em JavaScript para executar uma função em cada elemento do array. A função é passada como argumento para o método forEach() e é executada para cada elemento do array, passando o valor do elemento, o índice do elemento e o próprio array como argumentos.

    console.log("Produtos disponíveis:");
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(produto));// forEach apenas itera sobre os elementos da lista listaProtudosDisponiveis e imprime cada produto individualmente.

    const listaDeProdutosSolicitadosIndisponiveis = listaArgumentos.filter(argumento => {
        return !listaProtudosDisponiveis.find(produto => produto === argumento);
    });  //Esse comando cria um novo array listaDeProdutosSolicitadosIndisponiveis a partir do array listaArgumentos, onde cada elemento de listaArgumentos que não existe no array listaProtudosDisponiveis é adicionado a listaDeProdutosSolicitadosIndisponiveis.

    console.log();
    console.log("Produtos indisponíveis:");
    listaDeProdutosSolicitadosIndisponiveis.forEach(argumento => console.log(argumento)); // forEach apenas itera sobre os elementos da lista listaProtudosDisponiveis e imprime cada produto individualmente.

    console.log();
    listaProtudosDisponiveis.sort(); //Esse comando ordena os elementos do array listaProtudosDisponiveis em ordem alfabética.
    console.log("Produtos Ordenados:")
    listaProtudosDisponiveis.forEach(produto => console.log(produto)); //forEach apenas itera sobre os elementos da lista listaProtudosDisponiveis e imprime cada produto individualmente.

} catch (e) {
    console.log("Não foi possível efetuar a compra.")
}

//Esse código é um script em Node.js que recebe argumentos passados na linha de comando que representam produtos solicitados em uma compra, filtra esses produtos em dois arrays distintos: um com os produtos disponíveis e outro com os produtos indisponíveis. O script também ordena em ordem alfabética a lista de produtos disponíveis e imprime cada um dos arrays filtrados e a lista ordenada. Se ocorrer algum erro, é exibida uma mensagem de erro genérica.