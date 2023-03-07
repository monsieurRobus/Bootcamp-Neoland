import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, get , child , onValue} from "firebase/database"

import {app} from '../../../utils/firebase'
import { NavLink, Link } from 'react-router-dom'

import './Aside.css'

// import './../../models/setlist.json'

const handleClose = (e) => {

  document.querySelector('aside').classList.toggle('menuabre')

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
    <>
      <button className={'botonprueba'} onClick={handleClose}>X</button>
      <aside className={"menuabre"}>
        
        {
          setlistList.map((setlist)=>
            <NavLink to="/test" key={setlist.id} state={{ejemplo:"hola"}} className={"setlist-element"} >{setlist.name}</NavLink>
          )
        }
        <div className={"setlist-element"}>Complete list</div>
      </aside>
    </>
  )
}

export default Aside