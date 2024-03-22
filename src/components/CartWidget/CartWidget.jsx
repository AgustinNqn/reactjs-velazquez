import carrito from "../../assets/294547.svg"

const CartWidget = () => {
    return (
        <button style={{display:'flex', alignItems: "center", justifyItems:'center', background: 'white', color:'black', borderRadius: 20, width:  60, height: 60}}>
            <img style={{width: 25}}src={carrito}/>
            0
        </button>
    )
}

export default CartWidget