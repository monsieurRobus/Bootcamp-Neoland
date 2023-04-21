import inquirer from "inquirer"

const respuesta = [
    "Rick y morti : Eres un cansino",
    "Doraemon : Eres un gato",
    "Scooby Doo : Eres un perro",
    "Popeye : Eres un marino",
    "Sonic : Eres un erizo",
    "Mickey Mouse : Eres un raton"
]

inquirer.prompt([
    {
        name:"name",
        message: "¿Cual es tu nombre?",
    },
    {
        type: "list",
        name: "goal",
        message: "¿Cual es tu objetivo en la vida?",
        choices: [
            "Beber",
            "Leer Documentacion",
            "Acordarme que es NODE",
            "Ser un buen programador"
        ],
    }
]).then((answers) => {

    switch(answers.goal){


        case "Beber":
            console.log(`Hola ${answers.name}, eres ${respuesta[0]}`)
            break;
        case "Leer Documentacion":
            console.log(`Hola ${answers.name}, eres ${respuesta[1]}`)
            break;
        case "Acordarme que es NODE":
            console.log(`Hola ${answers.name}, eres ${respuesta[2]}`)
            break;
        case "Ser un buen programador":
            console.log(`Hola ${answers.name}, eres ${respuesta[3]}`)
            break;

    }

})