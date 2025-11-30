import { Link } from "react-router-dom";

const Card = ({ titulo, descripcion, imagenBase64 }) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img 
          src={`${imagenBase64}`} 
          className="card-img-top" 
          alt={titulo} 
        />

        <div className="card-body">
          <h5>{titulo}</h5>
          <p className="card-text">{descripcion}</p>

          <div class="d-flex justify-content-between"> 
            <button class="btn btn-outline-success">añadir al carro</button>

          
              <Link class="nav-link " to="/Detalle" >
                Detalle 
              </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
