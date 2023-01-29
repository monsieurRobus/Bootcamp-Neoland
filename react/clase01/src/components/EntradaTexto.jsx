import { useState } from "react";



const EntradaTexto = () => {
    const [name,setName] = useState("Hola");
    return (
        <section>
            <h1>{name}</h1>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        </section>
    )



}

export default EntradaTexto;