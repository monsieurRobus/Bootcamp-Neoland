import { CancionComponent } from "./cancionComponent"

let lista = '';
const canciones = [

    {
        id: 21,
        titulo: 'rope effect',
        grupo: 'shop motor'
    },
    {
        id: 28,
        titulo: 'mean effect',
        grupo: 'shop worse'
    }, 
    {
        id: 13,
        titulo: 'effect ball',
        grupo: 'motor lie control'
    }, {
        id: 13,
        titulo: 'effect ball',
        grupo: 'motor lie control'
    }, {
        id: 13,
        titulo: 'effect ball',
        grupo: 'motor lie control'
    }, {
        id: 13,
        titulo: 'effect ball',
        grupo: 'motor lie control'
    }, {
        id: 13,
        titulo: 'effect ball',
        grupo: 'motor lie control'
    }, {
        id: 13,
        titulo: 'effect ball',
        grupo: 'motor lie control'
    }, {
        id: 13,
        titulo: 'effect ball',
        grupo: 'motor lie control'
    }, {
        id: 13,
        titulo: 'effect ball',
        grupo: 'motor lie control'
    }]

for (let cancion of canciones)
    lista+=CancionComponent(cancion)


export const ListaCanciones = () =>`


    <div">
        ${lista}
    </div>


`





