//LAS PROMESAS: Estas son una forma de asincronismo que nos permite usar js, esta establece una validación de algo que se cumplira y retornara algo en este caso o algo diferente en caso contrario

//El objetivo de las promesas y el asincronismo es poder captar los posibles errores que nosotros establescamos pueden pasar dentro de la logica y asi evirar que el programa no continue con su correcto funcionamiento

//SINTAXIS
const promesa = new Promise(function(resolve,reject){
    resolve('hey');
});

const cows = 5;

const countCows = new Promise(function(resolve,reject){
    if (cows >10){
        resolve(`There are ${cows} cows, so we could get the enought milk`);
    }else{
        reject(`we don't have enought cows`)
    }
});

countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.error(error);
}).finally(()=> console.log('Finished prosess'));