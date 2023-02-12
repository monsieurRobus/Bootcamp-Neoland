import React from 'react'

import './element-list.css'

const ElementList = (props) => {
    const {song} = props
  return (
    <div id={song.id}>
        <h1>{song.name}</h1>
        <h2>{song.band}</h2>
    </div>
  )
}

export default ElementList