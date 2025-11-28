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
    <div>
      <h1>Formulario de registro</h1>
      <form onSubmit={handleRegister}>
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
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
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
        </div>

        <button type="submit">Crear cuenta</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};
