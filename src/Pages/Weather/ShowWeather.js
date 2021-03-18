import React, {useState, useEffect} from 'react';
import "./ShowWeather.css";

function ShowWeather(match){
    let chosenCity;
    const [city, setCity] = useState({});
    
    useEffect(() => {
        chosenCity= `${match.match.params.chosenCity}`
        console.log(chosenCity);
        fetchWeather();
        if( chosenCity!==""){
            
        
        }
        else{
            alert("Stadt nicht gefunden");
        }
    },[]);
    

    const fetchWeather = async () =>{
        
        
        const weather = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=53dda67aa1964469852160320211703&q=${chosenCity}&aqi=no`
        );
        const item = await weather.json();
        setCity(item);
        console.log(city);
        console.log(city.location);
        console.log(city.current);

    }
    
    return(
        <div>
            <ul className="cityContent">

                <li className = "cityName">{city.location.name}</li>
                <li> <img className= "cityImage" src={city.current.condition.icon} alt="Icon" /></li>
                <li>{city.current.condition.text}  {city.current.temp_c}°C</li>
                <li>feels like: {city.current.feelslike_c}°C</li>
                <li>Humidity: {city.current.humidity}%</li>
                <hr></hr>
                <li>Country: {city.location.country}</li>
                <li>Region: {city.location.region}</li>
                <li>Time : {city.location.localtime}</li>
                
                
                
                
            </ul>
        </div>
        
    )
}
export default ShowWeather