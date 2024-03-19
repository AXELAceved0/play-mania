import classes from "./PaginaContacto.module.css"

const PaginaContacto = () => {
    return (
        <main>
            <div className={classes.divContainer}>
            <input className={classes.button} type="text" name="nombre" placeholder="Nombre" />
            <input className={classes.button} type="text" name="apellido" placeholder="Apellido" />
            <input className={classes.button} type="number" name="celular" placeholder="Celular" />
            <input className={classes.button} type="email" name="correo" placeholder="Correo" />
            <textarea className={classes.textarea} name="comentario" placeholder="Pregunta o Comentario" />
            <input className={classes.buttonSend}  type="button" value="Enviar" />
            </div>
        </main>
    )
}
export default PaginaContacto