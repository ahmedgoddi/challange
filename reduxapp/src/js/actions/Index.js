import {INCREMENT , DECREMENT} from "../const/ActionTypes"


export const inc = (number = 1) => {
    return {
        type : INCREMENT ,
        payLode : number
    }
}

export const dec = (number= 1) => {
    return {
        type : DECREMENT,
        payLode : number
    }
} 