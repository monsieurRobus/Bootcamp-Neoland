export const Button = (labelButton,idButton=undefined,classButton=undefined) => `

    <button ${ (idButton!=undefined) ? 'id="'+idButton+'"' : '' }>${labelButton}</button>

`