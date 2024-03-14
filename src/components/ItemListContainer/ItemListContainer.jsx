import { useState, useEffect } from "react"
import { getProducts,getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    useEffect(() => {
        const asyncFunction = categoriaId ? getProductsByCategory : getProducts

        
        asyncFunction(categoriaId)
            .then(result => {
                setProductos(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [categoriaId])

    return (
        <main>
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </main>
    )
}

export default ItemListContainer