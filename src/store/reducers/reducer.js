//Define initial state
const initialState = {
    age:10,
    history:[],
    loading:false
}

const reducer = (state = initialState,action) =>{
    let newState = {...state};
    // if(action.type === "AGEUP"){
    //     newState.age = newState.age + action.value;     
    //     newState.history = newState.history.concat({id:Math.random(), age:newState.age});    
    //     newState.loading = false;
          
    //     // return{
    //     //     ...state,
    //     //     age: state.age + action.value,
    //     //     history: state.history.concat(state.age + action.value)
    //     // }
    // }
    //action type = "AGEUP_ASYNC" is for redux-saga.
    if(action.type === "AGEUP_ASYNC"){
        newState.age = newState.age + action.value;
        newState.history = newState.history.concat({id:Math.random(),age:newState.age});
    }
    if(action.type === "AGEDOWN"){
        newState.age = newState.age - action.value;
        newState.history = newState.history.concat({id:Math.random(), age:newState.age});
        // return{
        //     ...state,
        //     age: state.age - action.value,
        //     history: state.history.concat(state.age - action.value)
        // }
    }
    if(action.type === "DELITEM"){        
       newState.history = newState.history.filter(e=>e.id!==action.key);
    //    return{
    //        ...state,
    //        history: state.history.filter(el=>el.id!==action.key)
    //    }
    }
    if(action.type === "LOADING"){
        newState.loading = true;
    }
  
    return newState;
}
export default reducer;
