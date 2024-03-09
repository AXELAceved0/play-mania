import classes from './Item.module.css'

const Item = ({img, nombre, precio}) => {
    return (
        <div >
        <img src={img} style={{width:200, height:300}} />
        <h2>{nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <button>Agregar al Carrito</button>
    </div>
    )
}
export default Item