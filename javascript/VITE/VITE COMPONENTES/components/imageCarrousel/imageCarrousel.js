import { images } from '../../data/image'
import { button } from '../button/button'
import './imageCarrousel.css'

let imagesContent = ``
let interval
for (let image in images)
    imagesContent+=`<img class="carousel-element" src="${images[image]}" alt="${image}"/>`

export const imageCarrousel = () => `
    <div class="carousel">
        <div id="img-container" class="img-container">
            ${imagesContent}
        </div>
        <div class="button-container">
            ${button('prev')}${button('next')}
        </div>
    </div>    

`
let visibleImg = 0

const runImg = (direction=true) => {
    const imageCarouselDiv = document.querySelector('#img-container')
    
    if(direction)
        { 
            if (visibleImg>imageCarouselDiv.children.length-1)
                visibleImg=0            
        }
    else {
        if (visibleImg<=0)
            visibleImg=imageCarouselDiv.children.length-1    
            
            
        }

    moveImg(imageCarouselDiv,visibleImg)
}

const moveImg = (carrousel,nextIndex) => {
    carrousel.style.transform=`translateX(${-500*nextIndex}px)`
}

const setCarouselInterval = () => {
    interval = setInterval(()=> {
            visibleImg++    
            runImg(true)    
        },2000)
}

const buttonNavImgCarrousel = () => {

    const buttons = document.querySelectorAll(`.btn`)
    console.log(buttons)
    for (let button of buttons)
        button.addEventListener("click", (button.id === 'prev') ? prev : next) // Desde aquí no se "cuelga" ningun evento :(

}

const prev = () => {
    console.log("prev")
}

const next = () => {
    console.log("next")
}

setCarouselInterval()
buttonNavImgCarrousel()