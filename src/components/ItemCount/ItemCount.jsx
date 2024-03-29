import { useState } from "react"
import classes from "./ItemCount.module.css"

const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrement = () =>{
        if(count > 1){
            setCount (prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }
    return (
        <article>
            <h3 style={{textAlign:"center"}}>{count}</h3>
            <button className={classes.button} onClick={decrement}>-</button>
            <button className={classes.button} onClick={() => onAdd(count)}> Agregar al Carrito</button>
            <button className={classes.button} onClick={increment}>+</button>
        </article>
    )
}

export default ItemCount