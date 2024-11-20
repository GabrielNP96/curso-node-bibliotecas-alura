const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto);
    //verficaPalavrasDuplicadas(texto)
})

// criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

// {
//   "web": 5,
//   "computador": 4
// }

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {
        return verficaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function verficaPalavrasDuplicadas(texto) {
    const listaDePalavras = texto.split(' ');
    const resultado = {};
    //objeto[propriedade] = valor;
    listaDePalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1;
    })

    return resultado;
}