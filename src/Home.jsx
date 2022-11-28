import React from 'react'
import Filtersection from './components/Filtersection'
import Productlis from './components/Productlis'
import Sort from './components/Sort'
import { useAppcontext } from './context/Approvidercontext'

const Home = () => {
  const {dataloading}= useAppcontext()
  if(dataloading){
    return <div className="mainloading">
      <img src="gif.gif" alt="loading" />
    </div>
  }
  return (
<>
<div className="main">
    <div className="filtersection">
        <Filtersection/>
    </div>
    <div className="productlist">
        <div className="productsorting">
     <Sort/>
        </div>
        <div className="products">
            <Productlis/>
        </div>
    </div>
</div>
</>
  )
}

export default Home