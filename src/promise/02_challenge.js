//Fetch es un paquete de javascript istalado con el comando 'npm i node-fetch'

//Asi mismo Fetch es una promesa la cual nos permite hacer peticiones HTTP de una manera mas simple, usando la sintaxis de un apromesa normal

import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi)
}

// fetchData(`${API}/products`)
//     .then(Response => Response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(()=> console.log('Hola'))
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(Response => Response.json())
    .then(products =>{
        console.log(products[0]);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(Response =>Response.json())
    .then(product =>{
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(Response=>Response.json())
    .then(category =>{
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(()=> console.log('Finished'));
