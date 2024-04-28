import { useState, useEffect } from "react"
import { getProductById } from "../../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState (null)  
    
    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(result=>{
                setProduct(result)
            })
    }, [itemId])
    
    return(
        <main>
            <h1>Detalles del articulo</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer