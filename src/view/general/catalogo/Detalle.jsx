import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../../contex/Contex";


const Detalle = () => {
  const { id } = useParams(); // tu id interno
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (!id) {
      setError("No llegó id en la URL");
      setLoading(false);
      return;
    }

    const fetchItem = async () => {
      try {
        console.log("Buscando producto por id interno:", id);
        const q = query(collection(db, "catalogo"), where("id", "==", id));
        const snap = await getDocs(q);

        if (snap.empty) {
          console.warn("Consulta vacía — no se encontró el producto con id interno:", id);
          setError("Producto no encontrado");
          return;
        }

        // Tomamos el primer documento (si hay más, podrías mapear)
        const docSnap = snap.docs[0];
        const data = docSnap.data();

        // Incluimos el documentId real por si lo necesitas
        const fullItem = { docId: docSnap.id, ...data };

        console.log("Producto encontrado:", fullItem);
        setItem(fullItem);
      } catch (e) {
        console.error("Error al buscar producto:", e);
        setError("Error buscando producto (revisa consola)");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>{error}</p>;
  if (!item) return <p>No hay datos para mostrar.</p>;

  // Convertir timestamp de Firestore si existe
  let creadoStr = "";
  if (item.creado && typeof item.creado.toDate === "function") {
    creadoStr = item.creado.toDate().toLocaleString();
  } else if (item.creado) {
    creadoStr = String(item.creado);
  }

  // Manejar imagen: si viene con "data:image/..." se usa tal cual,
  // si viene vacío, se usa placeholder
  const imagenSrc = item.imagen && item.imagen.startsWith("data:")
    ? item.imagen
    : item.imagen || placeholder;

  // Formatear precio
  const precioStr =
    item.precio || item.precio === 0
      ? `$${Number(item.precio).toLocaleString("es-CL")}`
      : "Sin precio";

  return (
    <div className="container-fluid row mt-4 d-flex justify-content-center">
      <div className="col-md-5 d-flex justify-content-center align-items-start">
        <img
          src={imagenSrc}
          className="card-img-top"
          alt={item.titulo ?? "producto"}
          style={{ maxWidth: "100%", borderRadius: 8 }}
          onError={(e) => {
            e.currentTarget.src = placeholder;
          }}
        />
      </div>

      <div className="col-md-7">
        <h1>{item.titulo ?? "Sin título"}</h1>

        <p>{item.descripcion ?? "Sin descripción"}</p>

        <div>
          <small>Stock disponible: {item.stock ?? "N/A"}</small>
        </div>

        <h2 className="mt-3">{precioStr}</h2>

        

        <div className="mt-3">
          <button
            className="btn btn-success"
            onClick={() => addToCart(item)}
          >
            Agregar al carrito
          </button>
        </div>

      
      </div>
    </div>
  );
};

export default Detalle;
