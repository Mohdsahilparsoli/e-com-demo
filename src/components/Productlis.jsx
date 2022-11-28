import React from 'react'
import { useFilterproduct } from '../context/Filtercontext'
import Productcart from './Productcart'

const Productlis = () => {
    const {filterproduct} = useFilterproduct();
  return (
<>
<Productcart product = {filterproduct}/>
</>
  )
}

export default Productlis