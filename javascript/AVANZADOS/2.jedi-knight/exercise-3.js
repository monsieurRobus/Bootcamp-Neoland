const users = [
    {
    name: "Alberto",
    favoritesSounds: {
    waves: { format: "mp3", volume: 50 },
    rain: { format: "ogg", volume: 60 },
    firecamp: { format: "mp3", volume: 80 },
    },
},
{
    name: "Antonio",
    favoritesSounds: {
    waves: { format: "mp3", volume: 30 },
    shower: { format: "ogg", volume: 55 },
    train: { format: "mp3", volume: 60 },
    },
},
{
    name: "Pedro",
    favoritesSounds: {
    shower: { format: "mp3", volume: 50 },
    train: { format: "ogg", volume: 60 },
    firecamp: { format: "mp3", volume: 80 },
    },
},
{
    name: "Cristina",
    favoritesSounds: {
    waves: { format: "mp3", volume: 67 },
    wind: { format: "ogg", volume: 35 },
    firecamp: { format: "mp3", volume: 60 },
    },
},
];


const sonidos = []
const sonidos2 = []
const contador = 0

for (user of users)
    for (sonido in user.favoritesSounds){

        if (sonidos.map(sound=>sound.name).includes(sonido))
            { 
                for(sound of sonidos)
                    if(sound.name === sonido)
                        sound.repeat+=1
            }
        else 
            sonidos.push({
                name: sonido,
                repeat: 1
            })}

console.log(sonidos)

// VERSION 2 CON CONTADOR PARALELO

