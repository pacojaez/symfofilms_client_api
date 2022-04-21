/**
 * base URL
 */
const urlBase = 'http://symfofilms.test/api/movies';
const urlCovers = 'http://symfofilms.test/img/covers/';
const urlStars = 'http://symfofilms.test/img/samples/';

function getAllRequest() {
    peticion(urlBase);
}



function getFilteredRequest() {

    let v = document.getElementById('valor').value;
    let c = document.getElementById('campo').value;
    console.log('v: ' + v);
    peticion(urlBase + "/search/" + c + '/' + v);

}

function peticion(url) {
    axios.get(url)
        .then(function(response) {
            let data = response.data.data;
            // console.log(JSON.stringify(data));
            const parent = document.getElementById('all_movies');
            const list = parent.querySelectorAll('div');
            for (element of list) {
                element.remove();
            }
            console.log(response.data.status);
            if (data.length > 0) {
                for (movie of data) {
                    let imageMovie = urlCovers + movie.caratula;
                    const html = (
                        `<!-- Card with no padding with a content container nested inside of it -->
                                <div class="w-400 mw-full"> <!-- w-400 = width: 40rem (400px), mw-full = max-width: 100% -->
                                <div class="card p-0 d-flex flex-column"> <!-- p-0 = padding: 0 -->
                                    <img src="` + imageMovie + `" class="img-fluid rounded-top align-self-center" alt="` + movie.titulo + `"> <!-- rounded-top = rounded corners on the top -->
                                    <!-- Nested content container inside card -->
                                    <div class="content align-self-center">
                                    <h2 class="content-title align-self-center">
                                        ` + movie.titulo + `
                                    </h2>
                                    <p class="text-muted">
                                        ` + movie.sinopsis.slice(0, 150) + `...
                                    </p>
                                    <div class="text-center"> <!-- text-right = text-align: right -->
                                        <a href="movie.html?id=` + movie.id + `" class="btn btn-primary">Read more</a>
                                    </div>
                                    </div>
                                </div>
                                </div>`
                    );
                    /*+-- parent.insertAdjacentHTML("beforebegin", html); -*/
                    parent.insertAdjacentHTML("beforeend", html);
                }
            } else {
                let notFound = (`
                <!-- Card with no padding with a content container nested inside of it -->
                    <div class="w-full mw-full"> <!-- w-400 = width: 40rem (400px), mw-full = max-width: 100% -->
                        <div class="card p-0 d-flex flex-column"> <!-- p-0 = padding: 0 -->
                            <!-- Nested content container inside card -->
                            <div class="content align-self-center">
                            <h2 class="content-title align-self-center">
                                NO SE HA ENCONTRADO NINGUNA PELÍCULA CON ESOS TÉRMINOS
                            </h2>
                            </div>
                        </div>
                    </div>
                `);
                parent.insertAdjacentHTML("beforeend", notFound);
            }


        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});

}

function getByIdRequest() {
    const urlMovie = urlBase + "/" + getId();
    console.log(urlMovie);
    axios
        .get(urlMovie)
        .then(function(response) {

            let movie = response.data.data;
            const parent = document.getElementById("all_movies");

            let estrellas = [];
            if (movie.valoracion > 0 && movie.valoracion != null) {
                for (i = 0; i < 6; i++) {
                    if (i < movie.valoracion) {
                        estrellas.push("<img src='" + urlStars + "/estrellaon.gif' alt='" + movie.valoracion + "/5' title='" + movie.valoracion + "/5' style='height:25px; width:25px'/>");
                    }
                    if (i > movie.valoracion) {
                        estrellas.push("<img src='" + urlStars + "/estrellaoff.gif' alt='" + movie.valoracion + "/5' title='" + movie.valoracion + "/5' style='height:25px; width:25px'/>");
                    }
                }
            } else {
                estrellas = `<p>Sin valoracion</p>`;
            }

            const html =
                `<!-- Card with no padding with a content container nested inside of it -->
                            <div class="w-full mw-full"> <!-- w-400 = width: 40rem (400px), mw-full = max-width: 100% -->
                              <div class="card p-5 d-flex flex-column"> <!-- p-0 = padding: 0 -->
                                <img src="http://symfofilms.test/img/covers/` +
                movie.caratula +
                `" class="img-fluid rounded-top align-self-center" alt="` +
                movie.titulo +
                `"> <!-- rounded-top = rounded corners on the top -->
                                <!-- Nested content container inside card -->
                                <div class="content">
                                  <h2 class="content-title">
                                    ` +
                movie.titulo +
                `
                                  </h2>
                                  <p class="text-muted">
                                    ` +
                movie.sinopsis +
                `
                                  </p>
                                </div>
                                <div class="content">
                                    <h3 class="content-title">
                                      Duración: ` +
                movie.duracion +
                `
                                    </h3>
                                    <p class="text-muted">
                                      Director: ` +
                movie.director +
                `
                                    </p>
                                    <p class="text-muted">
                                        Duración: ` +
                movie.duracion +
                `
                                      </p>
                                      <p class="text-muted">
                                        Estreno: ` +
                movie.estreno +
                `
                                      </p>
                                      <p class="text-muted">
                                        Valoración: 
                                        <div class="d-flex justify-content-start align-items-center" id ="movieValoracion">
                                        </div>  
                                      </p>
                                  </div>
                              </div>
                            </div>`;
            /*+-- parent.insertAdjacentHTML("beforebegin", html); -*/
            parent.insertAdjacentHTML("beforeend", html);
            const valoracion = document.getElementById("movieValoracion");
            valoracion.innerHTML = estrellas.join('');
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function postRequest() {
    axios.post('http://localhost:8080/item', {
            data: 'NewItem'
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function putRequest() {
    id = 10;
    axios.put('http://localhost:8080/item/' + id, {
            data: 'NewItem'
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function patchRequest() {
    id = 10;
    axios.patch('http://localhost:8080/item/' + id, {
            data: 'NewItem'
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function deleteRequest() {
    id = 10;
    axios.delete('http://localhost:8080/item/' + id)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function getId() {
    let url = location.href;

    let regEx = /\?id=\d{1,}/;

    let result = regEx.exec(url);
    console.log(result);
    if (result.length > 0)
        return result[0].split('=')[1];
    else
        return undefined;
}