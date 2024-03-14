import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaInicio from "./components/PaginaInicio/Paginanicio"
import PaginaContacto from "./components/PaginaContacto/PaginaContacto"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a Play Mania' /> } />
          <Route path='/inicio' element={<PaginaInicio />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/productos' element={ <ItemListContainer />} />
          <Route path='/contacto' element={ <PaginaContacto /> } />
          <Route path='/item/:itemId' element={  <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
