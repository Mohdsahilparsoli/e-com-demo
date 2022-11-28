import React from 'react'
import { useFilterproduct } from '../context/Filtercontext'


const Sort = () => {
    const {filterproduct,srotdata} = useFilterproduct()
  return (
<div className="sort">
    <p>{filterproduct.length} products</p>
    <select name='data'  onClick={srotdata}>
    <option value="">select one</option>
        <option value="a-to-z">a-to-z</option>
        <option value="z-to-a">z-to-a</option>
        <option value="low-high">low-high</option>
        <option value="high-low">high-low</option>
        
    </select>
</div>
  )
}

export default Sort