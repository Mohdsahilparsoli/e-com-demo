import React from 'react'
import { useFilterproduct } from '../context/Filtercontext'

const Filtersection = () => {
  const {serchproduct,filters,allproduct} = useFilterproduct();
  const {text,companyname} = filters;
 
 const getuniquevalue=(data,atrbute)=>{
let company= data.map((value)=>{
return value[atrbute];
})
const realdata = ["All",...company]
return [...new Set(realdata)];
 }

  const barnad = getuniquevalue(allproduct,"brand")
  const catgrory = getuniquevalue(allproduct,"category")
 
  return (
<>
<div className="filterapply">
  <form action="#">
    <input type="text" name='text' value={text} placeholder='search product......' onChange={serchproduct} />
  </form>
</div>

<div className="filtersbycatgory">
  <h3>Category</h3>
  {
    catgrory.map((value,indx)=>{
return <button key={indx} className={companyname==value?"active":""} name="companyname" value={value} onClick={serchproduct}>{value}</button>
    })
  }
</div>

</>
  )
}

export default Filtersection