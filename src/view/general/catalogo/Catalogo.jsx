import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase";
import Card from "./Card";

const Catalogo = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "catalogo"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(data);
      } catch (error) {
        console.error("Error al obtener catalogo:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Catalogo</h1>

      {items.length === 0 && <p>Cargando datos...</p>}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {items.map((item) => (
         <Card 
      key={item.id} 
      titulo={item.titulo}
      descripcion={item.descripcion}
      imagenBase64={item.imagen} // <- campo como está en Firestore
    />
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
