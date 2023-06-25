// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, 
// utilizando `console.log()`:

// a) Crie uma função que recebe os 3 arrays por parâmetro  e imprima a 
// **quantidade de itens** de cada array (utilize o `console.log()` para cada impressão).

// b) Crie outra função que recebe os 3 arrays por parâmetro e  imprima o **primeiro item** do primeiro array, 
// o **segundo item** do segundo array, e o **terceiro item** do terceiro array.

// c) Na mesma função **Verifique** se um item está incluído no primeiro array e depois no terceiro array. 
// Imprima o resultado dessas verificações no `console.log()`. 
// A primeira impressão deve ser um booleano **true** e a segunda deve ser um booleano **false**.

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.

    const arrayNumerico = [10,15,5,4,21];
    const arrayStrings = ['celular','Douglas','mouse','Pipoca'];
    const arrayMix = [10,true,'celular'];
    console.log(arrayNumerico, arrayStrings, arrayMix);

const manipularArrays = (arrayNumerico, arrayStrings, arrayMix)=>{
    console.log(arrayNumerico[0]);
    console.log(arrayStrings[1]);
    console.log(arrayMix[2]);
    console.log(arrayNumerico.includes(10));
    console.log(arrayStrings.includes('teclado'));
};

manipularArrays(arrayNumerico, arrayStrings, arrayMix)

