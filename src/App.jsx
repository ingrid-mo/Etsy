import { Routes, Route } from 'react-router-dom'
import { Home } from './view/general/Home.jsx'
import { Navbar } from './view/general/navbar.jsx'
import { FormRegistro } from './view/general/FormRegistro.jsx'
import FormularioProducto from './view/vendedor/FormularioProducto.jsx'
import Catalogo from './view/general/catalogo/catalogo.jsx'
import Detalle from './view/general/catalogo/Detalle.jsx'
function App() {
  return (
    <>          
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FormularioRegisto" element={<FormRegistro />} />
      <Route path="/FormularioProducto" element={<FormularioProducto />} />
      <Route path="/Catalogo" element={<Catalogo />} />
      <Route path="/Detalle" element={<Detalle />} />


    </Routes> 
     </>
  )
}

export default App
