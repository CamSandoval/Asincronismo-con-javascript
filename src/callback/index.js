//Un CALLBACK es conocido como la forma en la cual pasamos una funcion como parametro de otra funcion para asi generar como un tipo de rutina
function sum(num1,num2){
    return num1+num2;
};
function rest (num1,num2){
    return num1-num2;
};

function calc(num1,num2,callback){
    return callback(num1,num2);
};
//El anterior ejemplo es conocido como un callback sincrono, ya que este se ejecuta al momento en el que se llama a la funcion como un argumento
console.log(calc(2,2,sum));//OUTPUT=4
console.log(calc(5,4,rest));//OUTPUT=1


//La funcion setTimeOut, es la forma mediante la cual podemoas hcaer dichos callbacks, pero asignadoles un tiempo de espera
setTimeout (function (){
    console.time('Tiempo de espera')
    console.log('hola, js');//OUTPUT = 'hola, js', despues de 4 segundos
    console.timeEnd('Tiempo de espera')
},4000)
//En el anterior ejemplo se muestra la sintaxis explixita de una funcion setTimeOut, pero esta tambien se puede llamar mediante otra forma


//Aca se usa setTimeOut como funcion, y se le pasa como parametros la funcion que vamos a usar, y tambien el tiempo de espera adiciona de el argumento de nuestra funcion
function greeting(name){
    console.log(`Hola ${name}`)
}
setTimeout(greeting,2000,'oscar')//OUTPUT = 'Hola oscar' , despues de 2 segundos

