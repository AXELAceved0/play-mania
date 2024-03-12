import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"

const ItemDetail = ({ img, nombre, precio, categoria,descripcion, stock }) => {
    return (
        <div className={classes.containerdivs}>
            <div className={classes.imageContainer}>
                <img src={img}/>
            </div>
            <div className={classes.containerdiv}>
                <h2>{nombre}</h2>
                <h3>Consola:{categoria}</h3>
                <h4>Descripcion:{descripcion}</h4>
                <h4>Precio: ${precio}</h4>
                <ItemCount  stock={stock}/>
            </div>
        </div>
    )
}
export default ItemDetail