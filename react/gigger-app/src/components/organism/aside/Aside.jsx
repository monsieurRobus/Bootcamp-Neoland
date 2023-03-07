import React, { useEffect, useState } from 'react'

import { getDatabase, ref, set, get , child , onValue} from "firebase/database"

import {app} from '../../../utils/firebase'
import { NavLink, Link } from 'react-router-dom'

import './Aside.css'

// import './../../models/setlist.json'

const handleClose = (e) => {


}

const Aside = () => {
  const [setlistList,setSetlistList] = useState([])
  const db = getDatabase(app);
  const setlistRef = ref(db, 'setlists/' )

  useEffect(() => {
    onValue(setlistRef, (snapshot) => {
        const setlist = snapshot.val();
        setSetlistList(setlist || []);
        console.log(setlistList)
    });
}, []);

  return (
    <aside>
      <button className={'botonprueba'} onClick={handleClose}>X</button>
      {
        setlistList.map((setlist)=>{{console.log(setlist)}
          <div key={setlist.id}>{setlist.id} {setlist.name}</div>
        })
      }
    </aside>
  )
}

export default Aside