import { Link } from 'react-router-dom'
import "./General.css"


export const Navbar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light   custom-navbar"  
>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <div class="nav-item">
                    <Link class="nav-link" to="/">Inicio</Link>
              </div>
                    <div class="nav-item">
                <Link class="nav-link" to="/about">Acerca de</Link>
              </div>   
                  <div class="nav-item">
                    <Link class="nav-link" to="/FormularioRegisto">Formulario de registro</Link>
              </div>   
                  <div class="nav-item">
              <Link class="nav-link" to="/FormularioProducto">Formulario de Producto </Link>
              </div>
         <div class="nav-item">
              <Link class="nav-link" to="/Catalogo">catalogo </Link>
              </div>
            
            </div>
          </div>
        </div>
      </nav>
    </header>)
}

