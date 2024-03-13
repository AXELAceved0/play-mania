import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState(null)
    
    const{ itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(result => {
                setProductos(result)
            })
    }, [itemId])
    
    return(
    <main>
        <h1>Detalle del Producto</h1>
        <ItemDetail {...productos} />
    </main>
    )
}

export default ItemDetailContainer