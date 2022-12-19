import { Button } from "./button"
import { Title } from "./title"

export const Header = () => `
    <header>
        ${Title()}
        ${Button('Coloreame!',"change-color")}
        ${Button('Log Out','logout')}
    </header>
`