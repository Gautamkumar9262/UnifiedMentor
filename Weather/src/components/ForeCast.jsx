
import React from 'react';

const ForeCast = ({ forecast }) => {
    if (!forecast || !Array.isArray(forecast) || forecast.length === 0) {
        return null;
    }

    // Get daily forecast (one per day)
    const dailyForeCast = forecast.reduce((acc, item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!acc.find(f => f.date === date)) {
            acc.push({
                temperature: `${item.main.temp}°C`,
                day: new Date(item.dt * 1000).toLocaleDateString("en-EN", { weekday: 'short' }),
                date: date,
                icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
            });
        }
        return acc;
    }, []).slice(0, 5);

    // Get first 5 hourly forecasts
    const hourlyForecast = forecast.slice(0, 5).map(item => ({
        time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        degree: `${item.main.temp}°C`,
        windSpeed: `${item.wind.speed} m/s`
    }));

    return (
        <div className="flex">
            <div className="xl:w-96 w-full h-96 px-4 py-4 bg-[#050e1fde] shadow-2xl shadow-black m-4 mt-10 rounded-lg text-white">
                <h2>5 Days Forecast:</h2>
                {dailyForeCast.map((cast, index) => (
                    <div key={index} className="flex flex-row justify-between items-center p-2">
                        <img src={cast.icon} alt="icon" className="select-none w-16 h-12" />
                        <p className="font-bold items-center">{cast.temperature}</p>
                        <p className="font-bold">{cast.day}, {cast.date}</p>
                    </div>
                ))}
            </div>
            <div className="flex-grow h-auto px-4 py-4 bg-[#050e1fde] shadow-2xl m-4 mt-10 rounded-lg hidden lg:block text-white">
                <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Hourly ForeCast</h1>
                <div className="flex justify-around items-center gap-4 h-54 mt-14">
                    {hourlyForecast.map((hourCast, index) => (
                        <div key={index} className="flex flex-col items-center gap-5 bg-[#1c2938] rounded-lg p-4 w-28 text-center shadow-md">
                            <p className="text-sm font-medium">{hourCast.time}</p>
                            <img src={hourCast.icon} alt="hourCastIcon" className="w-16 h-16 select-none" />
                            <p>{hourCast.degree}</p>
                            <p>{hourCast.windSpeed}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForeCast