import { useEffect, useState } from "react";

interface Weather{
    temp: number;
    desc: string;
    icon: string;
}

export default function WeatherInfo(){
    const [weather, setWeather] = useState<Weather>({
        temp: 0, desc: "", icon: ""
    });

    useEffect(() =>{
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=35.2281&lon=128.6811&appid=b704c166f2ca95304640415f821a6164')
        .then(res => res.json())
        .then(data => {
            setWeather({
                temp: data.main.temp,
                desc: data.weather[0].description,
                icon: data.weather[0].icon,
            })
        })
    }, []);

    return(
        <>
            <p>온도: {weather.temp}</p>
            <p>설명: {weather.desc}</p>
            <img src={`https://api.openweathermap.org/img/wn/${weather.icon}.png`}/>
        </>
    )
}