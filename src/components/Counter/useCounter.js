
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { counterAction } from '../../redux/actions/counterAction';
export function useCounter() {
    const dispatch = useDispatch();
    const store = useSelector(store => store)
    console.log('Complete Store in useCounter Function', store );
    const [counter, setCounter] = useState(0);

    const Increment = () => {
        let increment = {
            name: "Increment Function",
            value: setCounter(counter + 1),
        }

        dispatch(counterAction(increment))
    }
    const Decrement = () => {
        let decrement = {
            name: "Decrement Function",
            value: setCounter(counter - 1),
        }

        dispatch(counterAction(decrement))
    }
    const Reset = ()=> {
        let reset = {
            name: "Reset Function" ,
            value : setCounter(0),
        }
        dispatch(counterAction(reset))
    }

    return [counter , Increment , Decrement , Reset]
}
