import React, {useEffect, useState} from 'react';
import "./ShowWeather.css";
import {Link} from 'react-router-dom'

function ShowWeather(match) {
    let chosenCity;
    const [city, setCity] = useState({});

    useEffect(() => {
        chosenCity = `${match.match.params.chosenCity}`
        console.log(chosenCity);
        fetchWeather();

    }, []);


    const fetchWeather = async () => {


        const weather = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=53dda67aa1964469852160320211703&q=${chosenCity}&aqi=no`
        );
        const item = await weather.json();
        setCity(item);
        console.log(city);
        console.log(city.location);
        console.log(city.current);

    }

    return (
        <div className="ShowWeatherContent">
            <Link to='/City'>
                <button className="ButtonShowCocktails">back</button>
            </Link>
            <ul className="cityContent">

                <li className="cityName">{city.location.name}</li>
                <li><img className="cityImage" src={city.current.condition.icon} alt="Icon"/></li>
                <li>{city.current.condition.text} {city.current.temp_c}°C</li>
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
