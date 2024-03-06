import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import MainContent from "./components/MainContent/MainContent"

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting='Bienvenidos a Play Mania' />
    <MainContent />
    </>
  )
}

export default App
