import fs from 'fs'

const printData = (data) => {
    console.log(data)
}

let data 
const readData = () => {
    let data = fs.readFileSync('ejemplo.txt', 'utf-8')
    printData(data)
}

readData()