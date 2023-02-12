import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getSongList } from './utils/songTools'
import './App.css'

import Footer from './components/organisms/Footer/Footer'

function App() {
  const [songList, setSongList] = useState([])

  useEffect(()=>{

    const songs = getSongList()
    setSongList(songs)

  },[])

  return (
    <div className="App">
      
      <Outlet context={[songList,setSongList]}/>
      <Footer />

    </div>
  )
}

export default App
