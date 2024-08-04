import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("")
    let[error,setError]=useState(false)
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "479b9443c6ef2798fe164f48ac2a7c3c";
    
    //get weather info and handle the error is valid or not
    let getWeatherInfo = async()=>{
        try{
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();

        // console.log(jsonResponse);
    //this are the json formate to get main info
    let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
        
    }

    console.log(result)
    return result
    }
        catch(error){
            throw error
        }
    };

    let handelChange=(evt)=>{
        setCity(evt.target.value)
    }

    let handleSubmit= async(evt)=>{
        try{
            evt.preventDefault()
            console.log(city)
            setCity("")
            let newinfo= await getWeatherInfo()
            updateInfo(newinfo)
        }
        catch(error){
            setError(true)
        }    
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField style={{color:"white"}} id="city" label="City Name" value={city} variant="outlined" required onChange={handelChange}/>
                <br /><br />
                <Button variant="contained"  type="submit">Search</Button>
                {/* check for the place is exsist or not */}
                {error && <p style={{color:"red"}}>no such place exists!..</p>}
            </form>
        </div>
    )
}