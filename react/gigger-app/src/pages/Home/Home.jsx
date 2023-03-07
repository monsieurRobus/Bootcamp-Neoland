import React, { useEffect, useState } from 'react'


import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get , child , onValue} from "firebase/database";
import {app} from '../../utils/firebase'
import List from '../../components/organism/lists/List'
import Header from '../../components/organism/header/Header'
import Footer from '../../components/organism/footer/Footer'


const Home = (props) => {

  const [ songList, setSongList] = useState([])
    const db = getDatabase(app);
    const songsRef = ref(db, 'songs/' )

    let songsRefList = []

    useEffect(() => {
        onValue(songsRef, (snapshot) => {
            const songs = snapshot.val();
            setSongList(songs || []);
            console.log("probando")
        });
    }, []);


  return (
    <main>
        <List listTitle={'Todas las canciones'} listDate={'-'} editable={false} songList={songList} setSongList={setSongList} db={db} songsRef={songsRef}/>        
    </main>
  )
}

export default Home