const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const validarNumero = (number) => {
        const resultado = Number.parseFloat(number);

        if (!resultado){
            console.log('número inválido!');
        } 
        return resultado;
}

const validarOperador = (operador) => {
    switch (operador) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            return operador;
        default:
            console.log('Operador inválido.');
    }
}

readLine.question('digite um número: ', (n1) => {

    const numberValido1 = validarNumero(n1);

    if (numberValido1) {

        readLine.question('digite um número: ', (n2) => {

            const numberValido2 = validarNumero(n2);

            if (numberValido2) {

                readLine.question('Escolha um operador: ', (operador) => {

                    const operadorValidado = validarOperador(operador);

                    if (operadorValidado) {
                        switch (operadorValidado) {
                            case "+":
                                console.log(`${numberValido1} + ${numberValido2} = ${numberValido1 + numberValido2}`);
                                break;
                            case "-":
                                console.log(`${numberValido1} - ${numberValido2} = ${numberValido1 - numberValido2}`);
                                break;
                            case "*":
                                console.log(`${numberValido1} * ${numberValido2} = ${numberValido1 * numberValido2}`);
                                break;
                            case "/":
                                console.log(`${numberValido1} / ${numberValido2} = ${numberValido1 / numberValido2}`);
                                break;
                            case "%":
                                console.log(`${numberValido1} % ${numberValido2} = ${numberValido1 % numberValido2}`);
                                break;
                            default: break;
                        }
                    }

                });

            }
        });
    }
});