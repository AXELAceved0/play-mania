import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProductos(result)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <main>
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </main>
    )
}

export default ItemListContainer