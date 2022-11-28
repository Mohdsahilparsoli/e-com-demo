import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "../contextreducer/Appreducer"
const Appcontext = createContext();
const initialvalue ={
dataloading:false,
product:[],
singalproductloading:false,
singalproduct:{},
apierorrs:false

}
const API = "https://dummyjson.com/products"
const Approvidercontext = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialvalue)

const getproductdata=async(url)=>{
dispatch({type:"apidataloading"})
    try{
const res =  await axios.get(url);
const result = await res.data;
const finalresult = await result.products
dispatch({type:"apidataload",payload:finalresult})
}catch{
    dispatch({type:"apierrors"})
}
}    
// get apidata
// get singalproduct
const getsingalproduct =async (url)=>{
dispatch({type:"singalproductloading"})
    try{
const res = await axios.get(url);
const result =await res.data;
dispatch({type:"singalproductpge", payload:result})
}catch{
    dispatch({type:"singal-producterr"})
}
}



useEffect(()=>{
    getproductdata(API)
},[])





return  <Appcontext.Provider value={{ ...state , getsingalproduct}}>
{children}
</Appcontext.Provider>
}

const useAppcontext = ()=>{
    return useContext(Appcontext)
}
export { Approvidercontext,useAppcontext}