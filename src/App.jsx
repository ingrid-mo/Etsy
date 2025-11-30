import { Routes, Route } from 'react-router-dom'
import { Home } from './view/general/Home.jsx'
import { Navbarcomponent } from './view/general/Navbarcomponent.jsx'
import { FormRegistro } from './view/general/FormRegistro.jsx'
import FormularioProducto from './view/vendedor/FormularioProducto.jsx'
import Catalogo from './view/general/catalogo/Catalogo.jsx'
import Detalle from './view/general/catalogo/Detalle.jsx'
import Cart from './view/general/catalogo/Cart.jsx'
function App() {
  return (
    <>          
    <Navbarcomponent />
      <Cart />   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FormularioRegisto" element={<FormRegistro />} />
      <Route path="/FormularioProducto" element={<FormularioProducto />} />
      <Route path="/Catalogo" element={<Catalogo />} />
      <Route path="/Detalle/:id" element={<Detalle />} />


    </Routes> 
     </>
  )
}

export default App
