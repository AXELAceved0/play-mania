import classes from './Button.module.css'

const Button = () => {
    return (
        <button className={classes.btn}>
            <i className={`bi bi-cart ${classes.bootstrapIcon}`}>0</i>
        </button>
    )
}

export default Button