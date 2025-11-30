import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
// import "/General.css"
export const FormRegistro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rol, setRol] = useState(0);
  const [nombre, setNombre] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado con éxito");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div  class="container-fluid">
      <div class="container-fluid d-flex justify-content-center mt-3">
              <h1>Formulario de registro</h1>
      </div>
      <form onSubmit={handleRegister} class="container">
        <div class="mb-3">
          <label htmlFor="nombre">Nombre:</label>
          <input
          class="form-control form-control-lg"
            type="text"
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
             class="form-control form-control-lg"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
           class="form-control form-control-lg"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* <div>
          <label>Eres vendedor</label>
          <input
            type="radio"
            name="rol"
            value="vendedor"
            onChange={(e) => setRol(e.target.value)}
          />

          <label>Deseas comprar</label>
          <input
            type="radio"
            name="rol"
            value="comprador"
            onChange={(e) => setRol(e.target.value)}
          />
        </div> */}
<div class="container-fluid d-flex justify-content-end">
   <button type="submit" class="btn btn-success mt-2 "  >Crear cuenta</button>
   </div>
       

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};
