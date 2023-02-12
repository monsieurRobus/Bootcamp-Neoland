import React , { useState, useEffect}from 'react'

import HeaderSetlist from '../../organisms/HeaderSetlist/HeaderSetlist'
import SongList from '../../organisms/SongList/SongList'
import './setlist-view.css'

const SetlistView = () => {
  
  const [songList,setSongList] = useState([])
  

  return (
    <>
      <HeaderSetlist />
      <SongList />
    </>
  )
}

export default SetlistView