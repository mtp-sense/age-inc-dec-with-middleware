export const loading = ()=>{
    return{type:"LOADING"}
} 

 export const ageUpAsync = (val)=>{
     return {type:"AGEUP",value:val}
 }

 export const ageUp = (val)=>{
     return dispatch=>{
         dispatch(loading());   
         setTimeout(()=>{   
             //Modify the value after the action is caught
              val++;          
            dispatch(ageUpAsync(val));
         },5000);
     }
 }
 export const ageDown = (val) =>{
     return {type:"AGEDOWN",value:val}
 }