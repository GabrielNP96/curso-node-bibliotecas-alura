const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    verficaPalavrasDuplicadas(texto)
})

// criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

// {
//   "web": 5,
//   "computador": 4
// }


function verficaPalavrasDuplicadas(texto) {
    const listaDePalavras = texto.split(' ');
    const resultado = {};
    //objeto[propriedade] = valor;
    listaDePalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1;
        console.log(resultado)
    })
}