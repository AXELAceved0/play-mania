import classes from './Item.module.css'

const Item = ({img, nombre, precio}) => {
    return (
        <div className={classes.divContainer}>
        <img className={classes.imagenes} src={img} />
        <h2>{nombre}</h2>
        <h3 style={{padding:6}}>Precio: ${precio}</h3>
        <button className={classes.Button}>Agregar al Carrito</button>
    </div>
    )
}
export default Item