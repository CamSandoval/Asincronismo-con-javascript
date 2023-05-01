//En el proseso de la manipulacion de datos dentro de un API tambien podemos hacer el usod e metdoos que permitan enviar informacion a estas mediante los metodos POST

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1/products/';


//Aca tendremos la sinatxis de una funcion la cual va usar fetch para enviar estoa datos a la api
function postData (urlAPI,data){
    //El primer parametro es la url de la API, el segundo es la sinatxis especifica que debe de tener la funcion para identificar que se quiere hacer un POST
    const response = fetch(urlAPI,{
        method: 'POST',
        mode: 'cors',
        credentials:'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

//Aca tenemos el objeto que enviaremos a la API, con la estructura segun la documentacion de esta
//La estructura puede variara deacuerdo a la API
const data = {
    "title": "New Product Course",
    "price": 999,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}`,data)
    .then(response=>response.json())
    .then(data =>console.log(data));