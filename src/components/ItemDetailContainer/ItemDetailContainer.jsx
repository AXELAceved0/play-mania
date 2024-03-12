import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState(null)

    useEffect(() => {
        getProductsById('2')
            .then(result => {
                setProductos(result)
            })
    }, [])
    
    return(
    <main>
        <h1>Detalle del Producto</h1>
        <ItemDetail {...productos} />
    </main>
    )
}

export default ItemDetailContainer