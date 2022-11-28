import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppcontext } from './context/Approvidercontext'

const Singaproduct = () => {
    const API = "https://dummyjson.com/products"
    const {getsingalproduct} = useAppcontext()
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        getsingalproduct(`${API}/${id}`)
    },[])



  return (
    <div>Singaproduct</div>
  )
}

export default Singaproduct