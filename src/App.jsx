import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App(){
  return(
  <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Hola bro'}/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de la categoria'}/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
    
    </Routes>
    </BrowserRouter>

  </>
  )
}

export default App
