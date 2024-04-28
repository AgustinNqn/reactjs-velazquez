import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () =>{
    
    return(
        <header style={{display: 'flex', justifyContent: 'center', gap: 20, backgroundColor: 'brown', borderRadius: 20}}>
            <h1>Ecommerce Velazquez</h1>
            <nav style={{gap: 50, listStyle: 'none', display: 'flex', alignItems: 'center'}}>
                <Link to ='/category/celulares' style={{backgroundColor: 'red', borderRadius: 10}}>Celulares</Link>
                <Link to ='/category/computadoras' style={{backgroundColor: 'red', borderRadius: 10}}>Computadoras</Link>
                <Link to ='/category/notebooks' style={{backgroundColor: 'red', borderRadius: 10}}>Notebooks</Link>
            </nav>
            <CartWidget/>
        </header>
        )
}

export default Navbar