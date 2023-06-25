// // Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, 
// // crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama 
// **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// // Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

const arrayNumerico = [10,15,5,4,21];
    const arrayStrings = ['celular','Douglas','mouse','Pipoca'];
    const arrayMix = [10,true,'celular'];

// // Faça o que se pede abaixo nas **cópias** dos arrays originais:

    const arrayNumericoCopia = arrayNumerico.slice();
    const arrayStringsCopia = arrayStrings.slice();
    const arrayMixCopia = arrayMix.slice();


// // a) Crie uma função que recebe o primeiro array como parâmetro e adicione um item `number` ao **início** 
// // do primeiro array. Utilize `console.log()` para imprimir o original e a cópia.

const addNumero = (arrayNumericoCopia)=>{
    arrayNumericoCopia.push(31);
    console.log(arrayNumerico);
    console.log(arrayNumericoCopia);
};
addNumero(arrayNumericoCopia)


// // b) Crie uma função que recebe o segundo array por parâmetro e remova o **último item** do segundo array. 
// // Utilize `console.log()` para exibir o original e a cópia.
const removerItem = (arrayStringsCopia)=>{
    arrayStringsCopia.pop()
    console.log(arrayStrings);
    console.log(arrayStringsCopia);
};
removerItem(arrayStringsCopia)

// // c) Crie uma função que recebe por parâmetro o terceiro array e remova o **segundo item** do terceiro array. 
// // Utilize `console.log()` para exibir o original e a cópia.
const removerSegundoItem = (arrayMixCopia)=>{
    arrayMixCopia.splice(1,1)
    console.log(arrayMix);
    console.log(arrayMixCopia);
};

removerSegundoItem(arrayMixCopia)

// // **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 3.

    

    
    