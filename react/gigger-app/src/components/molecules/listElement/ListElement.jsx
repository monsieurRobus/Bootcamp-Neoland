import React from 'react'




const ListElement = (props) => {
    const {name,band,duration,tags} = props
    return (
        <section>
            <h1>{name}</h1>
            <h2>{band}</h2>
            <h3>{duration}</h3>
        </section>
    )
}

export default ListElement