function getNav() {

    const nav = document.createElement("div");
    nav.innerHTML = `
                    <!-- Navbar (immediate child of the page wrapper) -->
                    <nav class="navbar align-items-center">
                    <!-- Navbar content (with toggle sidebar button) -->
                    <div class="navbar-content">
                    </div>
                    <!-- Navbar brand -->
                    <a href="#" class="navbar-brand">
                    <img src="img/icono.png" alt="logo Symfofilms">
                    SYMFOFILMS CLIENT API
                    </a>
                    <!-- Navbar text -->
                    <span class="navbar-text text-monospace">v1.0</span> <!-- text-monospace = font-family shifted to monospace -->
                    <!-- Navbar nav -->
                    <div class="navbar-text text-monospace mx-15">
                        <button class="btn d-flex" type="button" onclick="getAllRequest()">
                            <a href="allmovies.html">All Movies</a>
                        </button>
                    </div> <!-- text-monospace = font-family shifted to monospace -->
                    <!-- Navbar form (inline form) -->
                    <div id='parentSearchForm' class="d-flex flex-row align-items-center">
                    </div>
                    <!-- Navbar content (with the dropdown menu) -->
                    <div class="navbar-content d-md-none ml-auto"> <!-- d-md-none = display: none on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
                    <div class="dropdown with-arrow">
                        <button class="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
                        Menu
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1"> <!-- w-200 = width: 20rem (200px) -->
                        <div>
                            <button class="btn" type="button" onclick="getAllRequest()">
                                <a href="allmovies.html">All Movies</a>
                            </button>
                        </div>
                        <a href="#" class="dropdown-item">Products</a>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-content">
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    </nav>
    `;

    document.getElementById("parentNav").appendChild(nav);

}


function getSearchForm() {
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