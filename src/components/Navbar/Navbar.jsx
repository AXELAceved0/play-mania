import classes from './Navbar.module.css'
import Button from '../Button/Button'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <header className={classes.headerNav}>
            <div>
            <CardWidget />
            </div>
            <nav className={classes.containerHeader}>
            <Link className={classes.navegacion} to={`/inicio`}>Inicio</Link>
            <Link className={classes.navegacion} to={`/productos`}>Productos</Link>
            <Link className={classes.navegacion} to={`/contacto`}>Contacto</Link>
            </nav>
            <div>
            <Button />
            </div>
        </header>
    )
}
export default Navbar