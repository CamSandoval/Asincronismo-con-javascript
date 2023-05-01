//Primero debemos declarar e importar el paquete de XMLHttpRequest, que nos permite utilizar objetos (XHR) para interactuar con servidores (en este caso la API de Platzi) para esto hacemos:
import { XMLHttpRequest } from "xmlhttprequest"; 
//Llamado a la API con la creacion de una variable que contenga la url de la pagina
const API = 'https://api.escuelajs.co/api/v1';

//Creamos una funcion que sirva para recibir la url y un callback que reciba la solicitud
function fetchData(urlAPI,callback){
    //Necesitamos alguna manera de poder manipular las solicitudes que haremos para consultar los datos, para ello vamos a crear un espacio en memoria (una variable) en donde guardar el objeto (XHR) que importamos y gracias a los métodos ya construídos nos será mil veces más fácil desarrollar nuestra funcíon.
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET',urlAPI,true)
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState===4){
            if(xhttp.status===200){
                callback(null,JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error' + urlAPI);
                return callback(error,null)
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`,function(error1,data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`,function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2.category.id}`,function(error3,data3){
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log('________________________________________');
            console.log(data2.title);
            console.log('________________________________________');
            console.log(data3.name);
        });
    });
});
