import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';
import "./weatherApp.css"
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"jalgoan",
        feelsLike:26.57,
        humidity: 90,
        temp: 25.6,
        tempMax: 25.6,
        tempMin: 25.6,
        weather: "heavy intensity rain"
    });

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        
        <div style={{textAlign:"center"}} className='weatherContaner'>
            <h2 style={{color:"white"}}>Weather App By Tushar</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}