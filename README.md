# symfofilms_client_api

# Client JS sobre API RESTFUL Symfony

_Aplicación cliente que consume datos de un Backend hecho sobre Symfony_

_La primera versión de la App cliente iba a correr sobre JQuery y bootstrap como framework de CSS._
_En esta versión se usa Axios para las peticiones asíncronas, vanilla JS y halfmooncss como framework de CSS._
_Una sencilla app para consumir datos de un backend que nos da datos en JSON o XML.



## Comenzando 🚀

_Clona el proyecto y siente libre de modificarlo a tu antojo_
_Ejemplo de respuesta en JSON a la petición de una película
```
{
    "status": "OK",
    "data": {
        "id": 1,
        "titulo": "Shine a Light",
        "duracion": 122,
        "director": "Martin Scorsese",
        "genero": "Documental",
        "sinopsis": "Documental sobre los Rolling Stones. Un acercamiento riguroso, deslumbrante, divertido y profundamente humano al pasado y al presente de los cuatro miembros de la banda. Excelente equipo técnico en el que destacan los directores de fotografía Robert Richarson (Aviador, JFK), Mitch Amundsen (Misión Imposible 3), Stuart Dryburgh (El Piano), Robert Elswit (Buenas Noches, Buena Suerte), Ellen Kuras (Olvídate de Mí), Andrew Lesnie (EL Señor de los Anillos), Emmanuel Lubezki (Sleepy Hollow), Anastas Michos (Quiz Show), Declan Quinn (Leaving Las Vegas), John Toll (Braveheart) y Albert Mayles, director de GIMME SHELTER, documental sobre los trágicos eventos ocurridos en San Francisco en 1969 durante el concierto más multitudinario de los ROLLING STONES -información de la distribuidora-. (FILMAFFINITY)",
        "estreno": 2008,
        "valoracion": 4,
        "caratula": "618a95d65669f.jpg",
        "user": {
            "id": 25,
            "email": "pacojaez2@gmail.com",
            "userIdentifier": "pacojaez2@gmail.com",
            "username": "pacojaez2@gmail.com",
            "roles": [
                "ROLE_USER"
            ],
            "password": "$2y$13$uPAfgcCqvjt3evqEJgUYSebm5iiGhQDEu3JhjzX0qNxODH9ng16vy",
            "salt": null,
            "displayname": "Paco",
            "verified": true,
            "avatar": "619cfc8e3cf07.jpg",
            "__initializer__": null,
            "__cloner__": null,
            "__isInitialized__": true
        }
    }
}
```


### Pre-requisitos 📋

_De momento el proyecto recibe datos del Backend en Local_
_Futuras versiones consumirán datos de un servidor_


### Instalación 🔧

_main.js contiene las variables para la conexión con la DB_


_Ejemplo de configuración de conexión_
```
_/**
 * base URL
 */
const urlBase = 'http://symfofilms.test/api/movies';
const urlCovers = 'http://symfofilms.test/img/covers/';
const urlStars = 'http://symfofilms.test/img/samples/';_
```


_components.js es el archivo de componentes usando vanilla JS._
_Se ha usado una estrategia de componentes para la confección de las páginas_
_Dichos componentes se pueden anidar unos dentro de otros simplemente llamando a la función que los pinta_
_hace más fácil el mantenimiento a medio y largo plazo de la aplicación_

_Ejemplo de componentes_
```
_function getSearchForm() {
    const searchForm = document.createElement("div");
    searchForm.innerHTML = `
    <!-- Navbar form (inline form) -->
      <div class="form-inline w-full d-none d-md-flex ml-auto align-items-center"> <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
        <input type="text" class="form-control w-full" placeholder="Término a buscar" required="required" id="valor">
        <!-- Select box -->
        <select class="form-control" id="campo">
            <option value="" selected="selected" disabled="disabled">Campo</option>
            <option value="titulo">Título</option>
            <option value="sinopsis">Sinopsis</option>
            <option value="director">Director</option>
        </select>
            
                <button class="btn btn-primary" id="searchButton" onclick="getFilteredRequest();">BUSCAR</button>
            
      </div>
      
    `;
    document.getElementById("parentSearchForm").appendChild(searchForm);
}
```


## Construido con 🛠️


* [Symfony 5.3.10](https://symfony.com/)
* [Axios](https://axios-http.com/)
* [HalfmoonCss](https://www.gethalfmoon.com/)


## Autores ✒️

* **Paco Jáñez** - (https://github.com/pacojaez)


## Licencia 📄

Este proyecto está bajo la Licencia OpenSource

## Expresiones de Gratitud 🎁

* A Robert Sallent por su impagables lecciones

---
⌨️ con ❤️ por [pacojaez](https://github.com/pacojaez) 😊
