import Imagen from "./assets/Imagen"

const productos = [
{id: '1' , nombre: 'Mortal Kombat' , precio:51000 , formato: 'digital' , categoria: 'PS5', descripcion:'Juego digital para tu consola favorita', img:`${Imagen.mortalk}`, stock:5},
{id: '2' , nombre: 'God of War: Ragnarok' , precio:35000 , formato: 'digital' , categoria: 'PS4',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.godragnarok}`, stock:5},
{id: '3' , nombre: 'Lego Marvel Super Hero 2' , precio:9000 , formato: 'digital' , categoria: 'PS4',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.legomarvelhero}`, stock:5},
{id: '4' , nombre: 'Horizon Forbidden West' , precio:18000 , formato: 'digital' , categoria: 'PS4',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.horizonfw}`, stock:5},
{id: '5' , nombre: 'Grand Theft Auto V' , precio:14000 , formato: 'digital' , categoria: 'PS4',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.gtav}`, stock:5},
{id: '6' , nombre: 'FC24' , precio:32000 , formato:'digital' , categoria: 'PS4',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.fc24}`, stock:5},
{id: '7' , nombre: 'Batman: Arkman Coollection' , precio:9500 , formato: 'digital' , categoria: 'PS4',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.batmancollection}`, stock:5},
{id: '8' , nombre: 'God of War' , precio:16000 , formato: 'digital' , categoria: 'PS4',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.god}`, stock:5},
{id: '9' , nombre: 'A Plague Tale: Requiem' , precio:24000 , formato: 'digital' , categoria: 'PS5',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.aplague}`, stock:5},
{id: '10' , nombre: 'Resident Evil 4' , precio:23000 , formato: 'digital' , categoria: 'PS4',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.resident4}`, stock:5},
{id: '11' , nombre: 'Spider Man: Miles Morales' , precio:20000, formato: 'digital' , categoria: 'PS5',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.spidermiles}`, stock:5},
{id: '12' , nombre: 'Assasins`s Creed: Mirage' , precio:27000 , formato: 'digital' , categoria: 'PS5',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.asassinmirage}`, stock:5},
{id: '13' , nombre: 'Alien Isolation: The Collection' , precio:16000 , formato: 'digital' , categoria: 'PS4',descripcion:'Juego digital para tu consola favorita', img:`${Imagen.alien}`, stock:5},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(productos)
        }, 100)
    })
}

export const getProductsByCategory = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos.filter(prod => prod.categoria === categoriaId))
        }, 1000)
    })
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === itemId))
        }, 100)
    })
}