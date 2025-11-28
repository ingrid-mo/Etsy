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
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // convierte el archivo a base64
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    let base64Image = "";

    if (imagen) {
      base64Image = await convertToBase64(imagen);
    }

    await addDoc(collection(db, "catalogo"), {
      titulo,
      descripcion,
      imagen: base64Image,  
      stock: Number(stock),
      precio: Number(precio),
      creado: new Date()
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titulo del producto</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>

      <div>
        <label>Descripción</label>
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </div>

      <div>
        <label>Imagen de referencia</label>
        <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      </div>

      <div>
        <label>Stock</label>
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
      </div>

      <div>
        <label>Precio</label>
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Subiendo..." : "Subir producto"}
      </button>
    </form>
  );
}

export default FormularioProducto
