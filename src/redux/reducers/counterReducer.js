
import {COUNTER} from '../constants/type';
var a = 1;
let initialState =  {
    value: 'initial State',
    a : a + 1 ,

}


function counterReducer(state= initialState , action)
{

    switch (action.type) {
        
        case COUNTER:
            let newState = {
                ...state,
                value: ' Update and New State ' ,
                newData: action.payload ,
            }
            return newState;
            
            ;
    
        default:
            return state;
    }
}

export default counterReducer;