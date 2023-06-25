// No primeiro exercício vamos praticar a **criação de arrays**. Crie 3 arrays diferentes:

// - O primeiro deve possuir apenas **números**, e estes números não devem seguir nenhuma ordem específica;
// - O segundo array deve possuir apenas **strings**;
// - O terceiro array deve possuir **números**, **strings** e **booleanos**.

// Imprima cada um dos arrays acima, utilizando `console.log()`

const criarArrays = ()=>{
    const arrayNumerico = [10,15,5,4,21];
    const arrayStrings = ['celular','Douglas','mouse','Pipoca'];
    const arrayMix = [10,true,'celular'];
    console.log(arrayNumerico, arrayStrings, arrayMix);
};

criarArrays()