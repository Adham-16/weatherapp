import React, { useEffect, useState } from 'react'
import './Home.css'

export function Home({ city }) {
    const [error, setError] = useState("");
    const [forecast, setForecast] = useState({});
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=291848a0a7f6c59e6dc58bc15e17a66b`)
            .then((response) => response.json())
            .then((data) => {
                let dailyForecast = {};
                data.list.forEach((item) => {
                    let date = item.dt_txt.split(" ")[0];
                    if (!dailyForecast[date]) {
                        dailyForecast[date] = {
                            tempMax: item.main.temp_max,
                            tempMin: item.main.temp_min,
                            weather: item.weather[0].description,
                            icon: item.weather[0].icon,
                        };
                    } else {
                        dailyForecast[date].tempMax = Math.max(dailyForecast[date].tempMax, item.main.temp_max);
                        dailyForecast[date].tempMin = Math.min(dailyForecast[date].tempMin, item.main.temp_min);
                    }
                });
                if (JSON.stringify(forecast) !== JSON.stringify(dailyForecast)) {
                    setForecast(dailyForecast);
                }
                setError("");
            })
            .catch((error) => console.error("Error fetching data:", setError("City not found. Please enter a valid city name."), error));
    }, [forecast, city]);

    return (
        <>
            <div className="weather-container">
                {!error && <h1>5-Day Weather Forecast for {city} city</h1>}
                {error && <h1 style={{ color: "red", fontWeight: 'bold' }}>{error}</h1>}
                <div className="weather-boxes">
                    {Object.entries(forecast).slice(0, 5).map(([date, data], index) => (
                        <div className="weather-box" key={index}>
                            <h3>{date}</h3>
                            <img src={`https://openweathermap.org/img/wn/${data.icon}.png`} alt="weather icon" />
                            <p><strong>{data.weather}</strong></p>
                            <p>🌡️ Max: {data.tempMax}°C</p>
                            <p>❄️ Min: {data.tempMin}°C</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}









// import React, { useEffect, useState } from "react";

// const WeatherApp = () => {
//     const [forecast, setForecast] = useState({});

//     useEffect(() => {
//         fetch("https://api.openweathermap.org/data/2.5/forecast?q=Cairo&units=metric&appid=YOUR_API_KEY")
//             .then((response) => response.json())
//             .then((data) => {
//                 let dailyForecast = {};

//                 data.list.forEach((item) => {
//                     let date = item.dt_txt.split(" ")[0]; // استخراج التاريخ فقط بدون الساعة

//                     if (!dailyForecast[date]) {
//                         dailyForecast[date] = {
//                             tempMax: item.main.temp_max,
//                             tempMin: item.main.temp_min,
//                             weather: item.weather[0].description,
//                             icon: item.weather[0].icon,
//                         };
//                     } else {
//                         dailyForecast[date].tempMax = Math.max(dailyForecast[date].tempMax, item.main.temp_max);
//                         dailyForecast[date].tempMin = Math.min(dailyForecast[date].tempMin, item.main.temp_min);
//                     }
//                 });

//                 setForecast(dailyForecast);
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     }, []);

//     return (
//         <div className="weather-container">
//             <h2>5-Day Weather Forecast</h2>
//             <div className="weather-boxes">
//                 {Object.entries(forecast).slice(0, 5).map(([date, data], index) => (
//                     <div className="weather-box" key={index}>
//                         <h3>{date}</h3>
//                         <img src={`https://openweathermap.org/img/wn/${data.icon}.png`} alt="weather icon" />
//                         <p><strong>{data.weather}</strong></p>
//                         <p>🌡️ Max: {data.tempMax}°C</p>
//                         <p>❄️ Min: {data.tempMin}°C</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default WeatherApp;