import classes from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({id,img, nombre, precio, categoria}) => {
    return (
        <div className={classes.divContainer}>
        <img className={classes.imagenes} src={img} />
        <h2>{nombre}</h2>
        <h3 style={{padding:6}}>{categoria}</h3>
        <h4 style={{padding:5}}>Precio: ${precio}</h4>
        <Link className={classes.Link} to={`/item/${id}`}>Ver Detalles</Link>
    </div>
    )
}
export default Item