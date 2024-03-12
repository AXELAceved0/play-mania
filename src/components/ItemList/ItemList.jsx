import Item from "../Item/Item"
import classes from "./ItemList.module.css"

const ItemList = ({ productos }) => {
    return (
        <section className={classes.containerSection}>
            {
                productos.map(productos => {
                    return <Item key={productos.id} {...productos} />
                })
            }
        </section>
    )
}
export default ItemList