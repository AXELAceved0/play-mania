import logo from './assets/logo.png'
import classes from './CardWidget.module.css'

const CardWidget = () => {
    return (
        <>
        <img className={classes.logo} src={logo} alt="Logo" />
        </>
    )
}

export default CardWidget