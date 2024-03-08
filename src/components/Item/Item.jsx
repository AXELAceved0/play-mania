const Item = ({id, img, nombre, precio}) => {
    return (
        <div>
        <img src={img} style={{ width: 150 }} />
        <h2>{nombre}</h2>
        <h3>Precio: ${precio}</h3>
    </div>
    )
}
export default Item