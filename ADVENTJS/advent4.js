const boxes1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

const boxes2 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]

const boxes3 = [
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
]

function fitsInOneBox(boxes) {
    
    let result=false

    boxes.sort((a,b)=>{ 
        let compareLength =  (a.l-b.l) <0
        let compareWidth = (a.w-b.w)<0
        let compareHeigth = (a.h-b.h)<0

        
        
    }   
        
        
        
        ) 

    return result
}
console.log(fitsInOneBox(boxes1))
