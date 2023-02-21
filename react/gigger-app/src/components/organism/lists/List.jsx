import React from 'react'
import { songs } from '../../models/songs'
import ListElement from '../../molecules/listElement/ListElement'

const List = () => {
   
    return (
        <section>
            <h1>Lista</h1>  
            <div>
                {   
                    songs.map((song)=> 

                        (
                            <ListElement tag={song.id} id={song.id} name={song.name} band={song.band} duration={song.duration} tags={song.tags} />
                        )
 

                    )
                }
            </div>

        </section>
    )
}

export default List