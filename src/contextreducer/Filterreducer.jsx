
const Filterreducer = (state,action) => {
switch(action.type){
    case "viewproduct-data":
        
        return {
            ...state,
            allproduct:[...action.payload],
            filterproduct:[...action.payload],
        }
    case "sort-data-value":
    return{
            ...state,
            sortingvalue:action.payload
        }    

        case "sort-data-byvalue":
        let newdata;   
        const {sortingvalue,filterproduct} = state;
           let tempdata = [...filterproduct];
           const sortme = (a,b)=>{
            if(sortingvalue==="a-to-z"){
                return a.title.localeCompare(b.title)
            }
            if(sortingvalue==="z-to-a"){
                return b.title.localeCompare(a.title)
            }
            if(sortingvalue==="low-high"){
                return a.price-b.price
            }
           
            if(sortingvalue==="high-low"){
                return b.price-a.price
            }
           }

           newdata=tempdata.sort(sortme)
            return {
                ...state,
               filterproduct:newdata
            }
case "serching-product-data":
   const {name,value}=action.payload;
    return{
        ...state,
        filters:{
            ...state.filters,
            [name]:value
        }
    }

    case "serching-product":
        const{ allproduct} = state;
        let {text,companyname} = state.filters
        let tempproduct = [...allproduct]
        if(text){
            tempproduct=tempproduct.filter((value)=>{
                return value.title.toLowerCase().includes(text);
            })
            
        }
        if(companyname !=="All"){
            tempproduct=tempproduct.filter((value)=>{
                return value.category==companyname
            })
            console.log(tempproduct)
        }
    
        return{
            ...state,
            filterproduct:tempproduct
        }


    default:
        return state
}
}

export default Filterreducer