import {  createContext, useContext, useEffect, useReducer } from "react"
import { useAppcontext } from "./Approvidercontext"
import reducer from "../contextreducer/Filterreducer"
const Filtercontextprovider= createContext()
const initialvalue = {
    allproduct:[],
    filterproduct:[],
    sortingvalue:"loweset",
    filters:{
        text:"",
    companyname:"All"
    }
}
const Filtercontext = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialvalue)
    const {product} = useAppcontext()


// sort data 
const srotdata = (e)=>{
let value = e.target.value;
dispatch({type:"sort-data-value",payload:value})
}
// SERACHING PRODUCT
const serchproduct=(e)=>{
    const{name,value} = e.target;
    dispatch({type:"serching-product-data",payload:{name,value}})
}

// sort value product 
useEffect(()=>{
    dispatch({type:"sort-data-byvalue"})
},[state.sortingvalue])
// serchproduct
useEffect(()=>{
    dispatch({type:"serching-product"})
},[state.filters])

//product views
useEffect(()=>{
    dispatch({type:"viewproduct-data",payload:product})
},[product])
 return <Filtercontextprovider.Provider value={ {...state , srotdata,serchproduct }}>
    {children}
 </Filtercontextprovider.Provider>
}

const useFilterproduct=()=>{
    return useContext(Filtercontextprovider);
}

export { Filtercontext,useFilterproduct}