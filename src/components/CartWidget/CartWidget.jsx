import carrito from "../../assets/294547.svg"
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <Link to='/carrito' style={{display:'flex', alignItems: "center", justifyItems:'center', background: 'white', color:'black', borderRadius: 20, width:  60, height: 60}}>
            <img style={{width: 25}}src={carrito}/>
            0
        </Link>
    )
}

export default CartWidget