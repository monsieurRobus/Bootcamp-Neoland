import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteHeroe, getHeroe } from '../data/data'
import HeroeDetail from './HeroeDetail'

const Heroe = () => {
    const params = useParams()
    const navigate = useNavigate()
    const heroe = getHeroe(params.id)
  return (
    <div>
        <h1>Mi heeeeeeeeroeeeeeeee</h1>
        <HeroeDetail heroe={heroe} />
        <button onClick={ () => {
            deleteHeroe(heroe.id).then(()=>{
                navigate('/heroes')
            })
            
        }}>
        Al pijo el heroe
        </button>
    </div>
  )
}

export default Heroe