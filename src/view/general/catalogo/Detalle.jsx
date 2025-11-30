import React from 'react'

const Detalle = () => {
  return (
    <div class="container-fluid row mt-4">
    <div class="col" >
       <img 
          src="https://via.placeholder.com/150" 
          className="card-img-top" 
          alt="imagen" 
        />
    </div>
    <div class="col" >
      <h1>Titulo del detalle</h1>
  <div>
    <p> Descripcion del producto </p>
    <small>stock</small>
  </div>
  <h2>$12.000</h2>
<div>
  <button class="btn btn-success mt-2 "> Agregar al carrito </button>
</div>
    </div>
    </div>
  )
}

export default Detalle
