import React, { useState, useEffect} from 'react'
import {useOutletContext} from 'react-router-dom'
import { getSongList } from '../../../utils/songTools'
import HeaderMain from '../../organisms/HeaderMain/HeaderMain'
import SongList from '../../organisms/SongList/SongList'

import './global-song-list.css'

const GlobalSongList = () => {

  const [songList,setSongList] = useOutletContext()
    
  setSongList(getSongList())

  return (
    <>
        <HeaderMain />
        <SongList props={songList}/>
        
    </>
    
  )
}

export default GlobalSongList