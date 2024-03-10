import classes from './Item.module.css'

const Item = ({img, nombre, precio}) => {
    return (
        <div className={classes.divContainer}>
        <img src={img} style={{width:240, height:340}} />
        <h2>{nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <button className={classes.Button}>Agregar al Carrito</button>
    </div>
    )
}
export default Item