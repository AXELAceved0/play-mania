import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a Play Mania' /> } />
          <Route path='/item/:itemId' element={  <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
