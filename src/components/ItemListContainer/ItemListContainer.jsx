import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ([])  
    const [loading, setLoading] = useState(true)

    const { categoryId } = useState()
 
    useEffect (() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(result =>{
            setProducts(result)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [categoryId])


    if(loading ){
        return <h1>CARGANDO...</h1>
    }


    return (
        <main>
            <h1 style={{display: 'flex', justifyContent: 'center', backgroundColor: 'brown', borderRadius: 20}}>{greeting}</h1>
            <ItemList products={products}/>
        </main>
    )
}  

export default ItemListContainer