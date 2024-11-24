const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    
    try {
        if(erro) throw erro
        contaPalavras(texto);
    } catch(erro) {
        if(erro.code === 'ENOENT') console.log('erro ok');
        else {
            console.log('ouro erro');
        }
    }
    

})

function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return verficaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}

// criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado

// {
//   "web": 5,
//   "computador": 4
// }

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
}

function verficaPalavrasDuplicadas(texto) {
    const listaDePalavras = texto.split(' ');
    const resultado = {};
    //objeto[propriedade] = valor;
    listaDePalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
        
    })

    return resultado;
}