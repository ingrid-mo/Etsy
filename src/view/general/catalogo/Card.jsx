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

          <div> 
            <button>añadir al carro</button>

            <button>
              <Link className="nav-link" to="/Detalle">
                Detalle 
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
