import CartWidget from "../CartWidget/CartWidget"

const Navbar = () =>{
    
    return(
        <header style={{display: 'flex', justifyContent: 'center', gap: 20, backgroundColor: 'brown', borderRadius: 20}}>
            <h1>Ecommerce Velazquez</h1>
            <nav style={{gap: 50, listStyle: 'none', display: 'flex', alignItems: 'center'}}>
                <button style={{backgroundColor: 'red', borderRadius: 10}}>Notebooks</button>
                <button style={{backgroundColor: 'red', borderRadius: 10}}>Tablets</button>
                <button style={{backgroundColor: 'red', borderRadius: 10}}>Componentes</button>
            </nav>
            <CartWidget/>
        </header>
        )
}

export default Navbar