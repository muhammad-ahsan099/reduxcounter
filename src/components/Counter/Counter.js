
import React from 'react';
import { useCounter } from './useCounter';
import './style.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),

        
    },
}));


function CounterMain() {
    const classes = useStyles();

    const [counter, Increment, Decrement, Reset] = useCounter();


    return (
        <div>

            <h1 style={{textAlign: 'center' , fontFamily: 'cursive'}}>React Redux Counter </h1>
            <div className='outer_div' >
                <button onClick={Decrement} className='Decrement'> - </button>

                <div className='inner_div'>
                    <p className='counterVar' > {counter}</p>
                </div>

                <button onClick={Increment} className="Increment"> + </button>


            </div>

            
            <Button
                
                variant="contained"
                size = 'large'
                className={classes.button}
                startIcon={<RotateLeftIcon />}
                onClick={Reset}

                style={{margin: '0 auto', 
                display: "flex" ,
                backgroundColor: '#00b712',
                backgroundImage: 'linear-gradient(315deg, #00b712 0%, #5aff15 74%)',
                borderRadius: 30 ,
                color: 'white' ,
                fontFamily: 'cursive',
                fontSize: 20 ,
                
               
                }}

            >
                <strong>Reset</strong>
            </Button>
            <br/>
            <br/>
            <br/>


            

        </div>
    )
}

export default CounterMain;

