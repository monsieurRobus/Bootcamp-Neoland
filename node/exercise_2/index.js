import fs, {writeFile, readFile} from 'fs';

const probaturas = [
    {
        name: "Carlos",
        power: 70
    },
    {
        name: "Juan",
        power: 80
    },
    {
        name: "Pedro",
        power: 90
    }
]

writeFile('probaturas.json', JSON.stringify(probaturas), ()=> {
    console.log('Archivo creado')
})

readFile('probaturas.json', 'utf-8', (err, data) => {

    err && console.log("hubo un error en el archivo :(")
    data && console.log(JSON.parse(data))


}
)