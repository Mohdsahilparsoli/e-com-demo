
const Appreducer = (state,action) => {
switch(action.type){
    case "apidataloading":
        return{
            ...state,
            dataloading:true
        }
        case "apidataload":
            return{
                ...state,
                product:action.payload,
                dataloading:false
            }
          case "apierrors":
            return{
                ...state,
                apierorrs:true
            }  
         case "singalproductloading":
            return{
                ...state,
                singalproductloading:true,
            }   
          case "singalproductpge":
            return{
                ...state,
                singalproduct:action.payload,
                singalproductloading:false
            }  
            case "singal-producterr":
                return{
                    ...state,
                    apierorrs:true
                }
        default:
            return state
}
}

export default Appreducer