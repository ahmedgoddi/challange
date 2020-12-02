import {INCREMENT , DECREMENT} from "../const/ActionTypes"


const initState = {
    count : 99 ,
}



function countReducer(state = initState , action ) {
switch(action.type) {
    case INCREMENT :
        return {...state , count : state.count + action.payLode}
    
    case DECREMENT : 
        return {...state , count : state.count - action.payLode}
    default : 
        return state
}
} 

export default countReducer