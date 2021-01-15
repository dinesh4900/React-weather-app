import React from 'react';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import './InputBox.css';


const InputBox = ({input , setInput, findWeather}) => {
 const handleChange = (event) =>{
         setInput(event.target.value)
};
    

    const handleClick = (event) =>{
        event.preventDefault();
        findWeather();
    }
    return (
        <div className="InputBox">
            <div className="InputBoxContents">
                <h1>Weather App</h1>
                <p>Have a great day 🤙</p>
                <form>
                    <Input className="Input" placeholder="Enter city name" onChange={handleChange} value={input} /> 
                    <br />
                    <Button variant="contained" color="primary" type="submit" onClick={handleClick} >
                        Search
                    </Button>
                </form>

            </div>
        </div>
    )
};

export default InputBox;
