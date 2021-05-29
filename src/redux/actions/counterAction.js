
import { COUNTER } from "../constants/type"


export const counterAction = (data)=>
{
    return{
        type: COUNTER ,
        payload: data ,
    }
}