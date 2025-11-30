import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../Firebase";

const FormularioProducto = () => {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [stock, setStock] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      let imageUrl = "";

      if (imagen) {
        const imageRef = ref(storage, `productos/${imagen.name}`);
        await uploadBytes(imageRef, imagen);
        imageUrl = await getDownloadURL(imageRef);
      }
const id = crypto.uuidv4(); 

      await addDoc(collection(db, "catalogo"), {
        titulo,
        descripcion,
        imagen: "loqueseas",
        stock: Number(stock),
        precio: Number(precio),
        creado: new Date(),
        id
      });

      alert("Producto subido correctamente");

      // Limpiar formulario
      setTitulo("");
      setDescripcion("");
      setImagen(null);
      setStock(0);
      setPrecio(0);

    } catch (error) {
      console.error(error);
      alert("Error al subir producto");
    }

    setLoading(false);
  };

  return (
    <div class="container-fluid">
      <div class="container-fluid d-flex justify-content-center mt-3">
        <h1>Formulario de producto</h1>
      </div>
      <form onSubmit={handleSubmit} class="container">

        <div>
          <label>Titulo del producto</label>
          <input
            class="form-control form-control-lg"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} />
        </div>

        <div>
          <label>Descripción</label>
          <input
            class="form-control form-control-lg"
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)} />
        </div>

        <div>
          <label>Imagen de referencia</label>
          <input
            class="form-control form-control-lg"
            type="file"
            onChange={(e) => setImagen(e.target.files[0])} />
        </div>

        <div>
          <label>Stock</label>
          <input
            class="form-control form-control-lg"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)} />
        </div>

        <div>
          <label>Precio</label>
          <input
            class="form-control form-control-lg"
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)} />
        </div>
        <div class="container-fluid d-flex justify-content-end">
          <button type="submit" disabled={loading} class="btn btn-success mt-2 ">
            {loading ? "Subiendo..." : "Subir producto"}
          </button>
        </div>

      </form>
    </div>
  );
}

export default FormularioProducto
