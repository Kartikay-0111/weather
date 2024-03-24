import React, { useState, useEffect } from 'react'
import "w3-css/w3.css";
import Card from './card';
import { FaSearch } from 'react-icons/fa'

const Weather = () => {

    const [content, setContent] = useState('')
    const [city, setCity] = useState('Mumbai')
    const [icon, setIcon] = useState('assets/cloud.png')
    const [error, setError] = useState("")
    const key = import.meta.env.VITE_WEATHER_API;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

    const search = () => {
        const ele = document.getElementById("city").value;
        setCity(ele);
    }

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return res.json();
            })
            .then(content => {
                setContent(content);
                setError(null)
                const weatherCondition = content.weather[0].main;
                const iconMap = {
                    Clear: "assets/clear.png",
                    Clouds: "assets/cloud.png",
                    Rain: "assets/rain.png",
                    Thunderstorm: "assets/thunder.png",
                    Drizzle: "assets/drizzle.png",
                    Snow: "assets/snow.png",
                    Mist: "assets/mist.png",
                    Smoke: "assets/cloud.png",
                    Haze: "assets/mist.png",
                    Fog: "assets/mist.png",
                };
                setIcon(iconMap[weatherCondition]);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError(error.message)
                setContent(null)
            });
    }, [search ? city : ""])

    return (
        <div>
            <div className="top">
                <input placeholder='Search cityname' style={{ width: "80%" }} type="text" id='city' className='w3-margin w3-round-xxlarge' />
                <FaSearch onClick={search} className='w3-margin w3-right w3-xlarge' />
            </div>
            {content && <Card icon={icon} city={city} content={content} />}
            {error && <div className='w3-center w3-padding w3-margin-top w3-xxlarge w3-red w3-round-xlarge'><p>Oops!</p><p className='w3-xlarge'>Some error occured while fetching the weather data</p></div>}
        </div>
    )
}
export default Weather;
