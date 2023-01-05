const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {

    let totalWeight = 0
    let reindeerWeight = 0
    packOfGifts.forEach((gift)=> totalWeight+=gift.length)
    reindeers.forEach((reinder)=> reindeerWeight+=reinder.length*2)
    return Math.floor(reindeerWeight/totalWeight)
}

console.log(distributeGifts(packOfGifts,reindeers))