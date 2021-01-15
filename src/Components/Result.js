import React from 'react';
import './Result.css';
import { Button } from '@material-ui/core';

const Result = ({temp, desc, icon, setTemp}) => {
    return (
        <div className="Result">
            <div className="ResultBox">
                <h1> Temp: {temp}°C</h1>
                <p>{desc}</p>
                <img src={icon} alt="icon"></img> <br />
                <Button 
                    variant="contained" 
                    color="default" 
                    onClick={() => {
                        setTemp("");
                    }}>
                    Back
                </Button>
            </div>
            
        </div>
    )
}

export default Result;
