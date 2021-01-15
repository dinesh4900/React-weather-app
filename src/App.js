import React, {useState} from 'react';
import './App.css';
import InputBox from './Components/InputBox';
import axios from 'axios';
import Result from './Components/Result'

function App() {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  


  const findWeather = async() => {
    const apiKey = "b1a7f33903df62adcb456991a539f0a9";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=` +input +`&appid=` +apiKey +`&units=` +unit;
    const response = await axios.get(url);
    console.log(response);
    const temp = await response.data.main.temp;
    const weatherDescription = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imgURL =  `https://openweathermap.org/img/wn/` + icon + "@2x.png";
    console.log(temp, weatherDescription , imgURL);
    setTemp(temp);
    setDescription(weatherDescription);
    setIcon(imgURL);
    setInput("");
  }
  return (
    <div className="App">
    {temp === "" ? 
      (<InputBox input={input} setInput={setInput} findWeather={findWeather} /> ) 
        : 
        (<Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>)
    }
    </div>
  );
}

export default App;
