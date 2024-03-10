import Item from "../Item/Item"
import classes from "./ItemList.module.css"

const ItemList = ({products}) => {
    return (
        <div className={classes.containerDiv}>
            {
                products.map(products => {
                    return <Item key={products.id} {...products}/>
                })
            }
        </div>
    )
}
export default ItemList