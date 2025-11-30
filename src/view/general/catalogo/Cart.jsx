import { useContext } from "react";
import { CartContext } from "../../../contex/Contex";

export const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
        <div className="offcanvas-header">
          <h5>Carrito</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">

          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="d-flex justify-content-between border-bottom py-2">
                <div>
                  <h6>{item.titulo}</h6>
                  <p>${item.precio}</p>
                </div>

                <button 
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
              </div>
            ))
          )}

          {cartItems.length > 0 && (
            <button className="btn btn-outline-success w-100 mt-3" onClick={clearCart}>
              Vaciar Carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
