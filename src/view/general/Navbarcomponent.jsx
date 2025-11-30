import { Link } from 'react-router-dom'
import "./General.css"
import { HiShoppingCart } from "react-icons/hi2";
import { useContext } from "react";
import { CartContext } from '../../contex/Contex';

export const Navbarcomponent = () => {
    const { cartItems } = useContext(CartContext);

  return (
    <header>
   <nav class="navbar navbar-light navbar-expand-lg"   style={{ backgroundColor: "#BBDBB9" }}>
        <div class="container-fluid">
                        <Link class="nav-link" to="/Catalogo"><img class="img_logo" src="..\public\Logoo_esty.png" alt="" /> </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <div class="nav-item">
                    <Link class="nav-link" to="/Catalogo">Inicio</Link>
              </div>
                   
                  <div class="nav-item">
                    <Link class="nav-link" to="/FormularioRegisto">Formulario de registro</Link>
              </div>   
                  <div class="nav-item">
              <Link class="nav-link" to="/FormularioProducto">Formulario de Producto </Link>
              </div>
         <div class="nav-item">
        <button 
              className="btn btn-link position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
            >
              <HiShoppingCart size={25} />

              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                {cartItems.length}
              </span>
            </button>
       
              </div>
            
            </div>
          </div>
        </div>
      </nav>
    </header>)
}

