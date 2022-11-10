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

    media = 0
    numsonidos = 0
for (usuario of users)
    for(sonido in usuario.favoritesSounds)
        {
            media+=usuario.favoritesSounds[sonido].volume
            numsonidos+=1
        }

media=media/numsonidos;
console.log(media)