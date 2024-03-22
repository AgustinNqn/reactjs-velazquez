import Navbar from "./components/Navbar/Navbar"
import Button from "./components/Button/Button"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import CartWidget from "./components/CartWidget/CartWidget"
import ItemCount from "./components/ItemCount/ItemCount"

function App(){
  return(
  <>
    <Navbar/>
    <ItemListContainer greeting={'Hola bro'}/>
    <CartWidget/>
    <ItemCount stock={10}/>
    


    <Button text='Inicio' fondo='Gray' textColor='Black'/>
    <Button text='Contacto' fondo='Gray' textColor='Black'/>
    <Button text='Ubicacion' fondo='Gray' textColor='black'/>
  
  
  </>
  )
}

export default App
