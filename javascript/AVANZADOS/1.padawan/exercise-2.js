const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];

let indexComida;

for (comida of foodSchedule)
    if (!comida.isVegan)
        {
            comida.name=fruits.shift()
            comida.isVegan=true
        }

// Si quedan frutas en el array original, los metemos en foodSchedule

if(fruits.length!=0)
    for(fruta of fruits)
        foodSchedule.push({name:fruta,isVegan:true})

console.log(foodSchedule)