import classes from './Navbar.module.css'
import Button from '../Button/Button'
import CardWidget from '../CardWidget/CardWidget'

const Navbar = () => {
    return (
        <header className={classes.headerNav}>
            <CardWidget />
            <nav className={classes.containerHeader}>
            <a className={classes.navegacion} href="">Inicio</a>
            <a className={classes.navegacion} href="">Productos</a>
            <a className={classes.navegacion} href="">Contacto</a>
            </nav>
            <Button />
        </header>
    )
}
export default Navbar