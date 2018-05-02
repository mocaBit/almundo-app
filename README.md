# Proyecto Almundo

Este proyecto consiste en una aplicación para consultar hoteles. Fué construido con la pila MEAN (Mongo, Express, Angular y Node) y Está dividido en 2 apps (rest-api y front-app).


### Instalación
Para instalar el proyecto es necesario contar con Docker. 

+ Si no lo tiene instalado, puede descargarlo [aquí](https://www.docker.com/). 
+ Si no tiene instalado Git, puede descargar el repositorio [aquí](https://github.com/moises2011/almundo-app.git).

```cmd
$ git clone https://github.com/moises2011/almundo-app.git
$ cd almundo-app
$ docker-compose up --build
```

Despues, puede acceder a [http://127.0.0.1:8080](http://127.0.0.1:8080) para ver la aplicación front.

### Front-api
Url aplicación: __[http://127.0.0.1:3000](http://127.0.0.1:3000)__

Front-app está construido en Angular y consume los endpoints del rest-api utilizando los parametros name y stars para realizar las consultas que sean requeridas. 

La estructura lógica del proyecto es la siguiente:
	
    [-] Scenes - Pantallas
    	[+] Home - Página principal
    [-] Components - Componentes
    	[+] Hotel - Detalle de hotel
        [+] Search - Búsqueda
    [+] Services - Servicios
    [+] Models - Modelos


### Rest-api
url aplicación: __[http://127.0.0.1:8080](http://127.0.0.1:8080)__.

Rest-api es el back-end, está construido en Node y Express. Consume una base de datos no relacional (MongoDb) para luego exponer la información en sus endpoints.
Los endpoints soportados por el api, son:

 __GET | api/hotels__
 
 Se pueden consultar hoteles por su nombre y número de estrellas.
  	
  > __http://.../api/hotels?name=hilton&stars=[1,2]__
  > 
  > Donde __name__ es el nombre del hotel y __stars__ el número de estrellas
 
    {
      "status":200,
      "message":"Hoteles consultados exitosamente"
      "data":[
        {
        "id":"266911",
        "_id":"5ae8daa8b142394ef8c7286c",
        "name":"Inkawasi Hostel Boutique",
        "stars":2,
        "price":796.13,
        "image":"4241228_30_b.jpg",
        "amenities":["restaurant"]
        }
      ]   
	}
    
 __GET | api/hotels/:id__ 
 
 > __id__ (consecutivo del hotel)
   
   	{
     "status":200, 
     "message":"Hotel consultado exitosamente",
     "data":{
       "amenities":["coffe-maker"],
       "_id":"5ae8f99145be8106e4cc5efe",
       "id":"266911",
       "name":"1900 Hostel",
       "stars":1,
       "price":596.7,
       "image":"4850335_10_b.jpg",
       "__v":0
     }
   }
      
__POST	| api/hotels__ 

> Guarda un nuevo hotel. Enviando los siguientes parámetros

	{
    	"name": "Nuevo hotel",
        "stars": 4,
        "price": 125,
        "image": "image_12345.jpg",
        "amenities": ["beach", "club-nigth"]
    }
    
 > Recibe la siguiente respuesta:

  	{
      "status": 201,
      "data": {
          "name": "Nuevo hotel",
          "stars": 4,
          "price": 125,
          "image": "image_12345.jpg",
          "amenities": [
              "beach",
              "club-nigth"
          ],
          "_id": "5ae8fe1d45be8106e4cc5f48",
      },
      "message": "Hotel creado exitosamente"
  	}
    
  __PUT 	| api/hotels__ 
  
  >Actualiza un hotel, enviandole los siguientes valores post

	{
    	"name": string,
        "stars": [number],
        "price": number,
        "image": string,
        "amenities": [string]
    }
    
   > Respuesta de la petición:

	{
      "status": 200,
      "data": {
          "amenities": null,
          "_id": "5ae904992f85e849c8645a69",
          "id": "266911",
          "name": "Nuevo nombre",
      },
      "message": "Hotel actualizado exitosamente"
	}

__DELETE 	| api/hotels/1__ 

>Elimina el hotel con ID=1 y entrega esta respuesta

	{
	"status": 204,
	"message": "Hotel eliminado exitosamente"
	}
