import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({info}){
   
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D" 

    const HOT_URL="https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.webp?b=1&s=170667a&w=0&k=20&c=8Q7_a7VqFHYU2vtvTzm1f14ADvWnBYJYrkMplD-IDMU="

    const RAIN_URL="https://plus.unsplash.com/premium_photo-1669719011414-2b7e687bd9c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    return(
        
        <div className="InfoBox">
            <div className="cardContener">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80
                    ?RAIN_URL
                    :info.temp>15
                    ?HOT_URL
                    :COLD_URL
                }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}{info.humidity>80
                    ?<ThunderstormIcon/>
                    :info.temp>15
                    ?<WbSunnyIcon/>
                    :<AcUnitIcon/>
                }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature={info.temp}&deg;C</p>
                    <p>Humidity={info.humidity}</p>
                    <p>Min Temp={info.tempMin}&deg;C</p>
                    <p>Max Temp={info.tempMax}&deg;C</p>
                    <p>The weather can be described as {info.weather} and fells like ={info.feelsLike}&deg;C </p>

                </Typography>
            </CardContent>
            
            </Card>
            </div>
        </div>
    )
}