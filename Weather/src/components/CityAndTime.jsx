// import sun from '../assets/sun.png'
// import Clock from './Clock';
// import sunrise  from '../assets/sunrise.png'
// import sunset from '../assets/sunset.png'
// import humidity from '../assets/humidity.png'
// import wind from '../assets/wind.png'
// import pressure from '../assets/pressure.png'
// import UV from '../assets/UV.png'
// import ForeCast from './ForeCast';
// import { useEffect, useState } from 'react';
// import {toast} from 'react-toastify'
// import axios from 'axios'
// const CityAndTime = ({ cityName, lat, lon, setLat, setLon}) => {

//     const [weatherData, setWeatherData] = useState(null)
//     const [forecastData, setForeCastData] = useState(null)
//     const [uvIndex, setUvIndex] = useState(null)

//     const fetchData = async () =>{
//         try{
//             const encodedCity = encodeURIComponent(cityName)
//             let url;

//             if(encodedCity){
//                 url = `https://api.openweathermap.org/data/2.5/weather?q=$(encodedCity)&units=metrics&&appid=b81d13ebeabdab8b7265989c40665041`;
//             }
//             else if(lat && lon){
//                 url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metrics&&appid=b81d13ebeabdab8b7265989c40665041`;    
//             }
//             else{
//                 toast.error("Missing city name or coordinates")
//             }

//             const currentWeather = await axios.get(url)
//             setWeatherData(currentWeather.data)

//             const {coord} = currentWeather.data
//             setLat(coord.lat)
//             setLon(coord.Lon)

//             const forecast =await axios.get(`https://api.openweathermap.org/data/2.5/forecaste?lat=${coord.lat}&lon=${coord.lon}&units=metrics&&appid=b81d13ebeabdab8b7265989c40665041`)

//             setForeCastData(forecast.data)

//             const uv = await axios.get(`https://api.openweathermap.org/data/2.5/forecaste?lat=${coord.lat}&lon=${coord.lon}&appid=b81d13ebeabdab8b7265989c40665041`)

//             setUvIndex(uv.data.value)
//         }
//         catch(error){
//             console.log(error)
//         }
//     }

//     useEffect(()=>{
//         if(!cityName && (!lat || !lon)){
//             navigator.geolocation.getCurrentPosition((pos)=>{
//                 const {latitude, logitude}=pos.coords
//                 setLat(latitude)
//                 setLon(logitude)
//                 fetchData(latitude, logitude)
//             },
//             (error)=>{
//                 console.log("Geolocation error:",error)
//                 toast.error("Location access denied. please enter a city manually.")
//             }
//         )
//         }
//         else{
//             fetchData(lat, lon)
//         }
//     },[cityName,lat,lon]
// )

// if(!weatherData || !forecastData){
//     return <div className='flex items-center justify-center text-white text-2xl md-text-6xl'>Loading...</div>
// }

// const {main, weather, sys, wind}=setWeatherData
// const {list} = forecastData

// const weatherIconUrl =`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`


//     return (
//         <>
//     <div className="flex flex-col xl:flex-row gap-4">
//         {/*left section city and time*/}
//         <div className="w-full xl:w-1/3 h-auto md:h-72 bg-[#050e1fde] shadow-2xl shadow-black rounded-lg text-white p-4 flex flex-col justify-between items-center">
//         <h1 className="text-2xl md:text-3xl font-bold">{cityName || weatherData.name}</h1>
//         <img src={sun} alt="WeatherImage" className='w-24 select-none'/>
//         <Clock/>
//         </div>
//         {/*Right section-weather Details*/}
//         <div className='flex-grow h-auto md:h-72 bg-[#050e1fde] rounded-lg text-white p-4 flex flex-col justify-around md:flex-row items-center md:items-stretch gap-4'>
//             {/* Tempreture and sunrise and sunset */}
//             <div className='flex flex-col items-center justify-between xl:justify-center gap-6 md:gap-4'>
//                 <h1 className='text-5xl md:text-7xl font-bold'>{main.temp}&#8451;</h1>
//                 <p>Feels like: <span className='text-lg md:text-xl ml-1.5 font-bold' >{main.feels_like}&#8451;</span>
//                 </p>
//                 <div className='flex xl:flex-col md:flex-row items-center gap-4 '>
//                     <div className='flex items-center gap-2'>
//                         <img src={sunrise} alt="" className='h-8 md:h-10 select-none' />
//                         <div className='text-center'>
//                             <h6>Sunrise</h6>
//                             <p>{new Date(sys.sunrise * 1000).toLocaleTimeString()} AM</p>
//                         </div>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                         <img src={sunset} alt="" className='h-8 md:h-10 select-none' />
//                         <div className='text-center'>
//                             <h6>Sunset</h6>
//                             <p>{new Date(sys.sunset * 1000).toLocaleTimeString()}  PM</p>
//                         </div>
//                     </div>

//                 </div>

//             </div>

// {/* main weather icon */}
//     <div className='flex flex-col justify-center items-center'>
//         <img src={sun} alt="" className='w-36 md:w-52 md:h-30 select-none' />
//         <p className='font-bold text-xl md:text-3xl '>{[weather[0].description]}</p>

//     </div>

//     {/* additional information */}
//     <div className='md:grid md:grid-cols-2 flex flex-row justify-between gap-4 md:p-4'>
//         <div className='flex flex-col items-center gap-2'>
//             <img src={humidity} alt="humidity" className='h-8 md:h-10 select-none' />
//             <p>{main.humidity}%</p>
//             <h6>Humidity</h6>
//         </div>
//         <div className='flex flex-col items-center gap-2'>
//             <img src={wind} alt="windSpeed" className='h-8 md:h-10 select-none' />
//             <p>{wind.speed}km/hr</p>
//             <h6>Wind Speed</h6>
//         </div>
//         <div className='flex flex-col items-center gap-2'>
//             <img src={pressure} alt="pressure" className='h-8 md:h-10 select-none' />
//             <p>{main.pressure}hPa</p>
//             <h6>Pressure</h6>
//         </div>
//         <div className='flex flex-col items-center gap-2'>
//             <img src={UV} alt="pressure" className='h-8 md:h-10 select-none' />
//             <p>{uvIndex !== null ? uvIndex : 'N/A'}</p>
//             <h6>UV</h6>
//         </div>

//     </div>
//         </div>

//     </div>
//         <ForeCast forecast={list}/>
// </>
//     );
// }
// export default CityAndTime;



//new

import sun from '../assets/sun.png'
import Clock from './Clock';
import sunrise  from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import humidity from '../assets/humidity.png'
import Wind from '../assets/wind.png'
import pressure from '../assets/pressure.png'
import UV from '../assets/UV.png'
import ForeCast from './ForeCast';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios'

const CityAndTime = ({ cityName, lat, lon, setLat, setLon }) => {
    const [weatherData, setWeatherData] = useState(null)
    const [forecastData, setForeCastData] = useState(null)
    const [uvIndex, setUvIndex] = useState(null)

    const fetchData = async (latitude, longitude) => {
        try {
            let url;
            if (cityName) {
                const encodedCity = encodeURIComponent(cityName)
                url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=metric&appid=b81d13ebeabdab8b7265989c40665041`;
            } else if (latitude && longitude) {
                url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=b81d13ebeabdab8b7265989c40665041`;
            } else if (lat && lon) {
                url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b81d13ebeabdab8b7265989c40665041`;
            } else {
                toast.error("Missing city name or coordinates")
                return;
            }

            const currentWeather = await axios.get(url)
            setWeatherData(currentWeather.data)

            const { coord } = currentWeather.data
            setLat(coord.lat)
            setLon(coord.lon)

            // Forecast endpoint is 'forecast', not 'forecaste'
            const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=b81d13ebeabdab8b7265989c40665041`)
            setForeCastData(forecast.data)

            // OpenWeatherMap's UV endpoint is deprecated, so we'll mock UV index for now
            // setUvIndex(uv.data.value)
            setUvIndex('N/A')
        }
        catch (error) {
            console.log(error)
            toast.error("Failed to fetch weather data.")
        }
    }

    useEffect(() => {
        if (!cityName && (!lat || !lon)) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const { latitude, longitude } = pos.coords
                setLat(latitude)
                setLon(longitude)
                fetchData(latitude, longitude)
            },
                (error) => {
                    console.log("Geolocation error:", error)
                    toast.error("Location access denied. Please enter a city manually.")
                }
            )
        }
        else {
            fetchData(lat, lon)
        }
        // eslint-disable-next-line
    }, [cityName, lat, lon])

    if (!weatherData || !forecastData) {
        return <div className='flex items-center justify-center text-white text-2xl md-text-6xl'>Loading...</div>
    }

    const { main, weather, sys, wind } = weatherData
    const { list } = forecastData

    const weatherIconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

    return (
        <>
            <div className="flex flex-col xl:flex-row gap-4">
                {/*left section city and time*/}
                <div className="w-full xl:w-1/3 h-auto md:h-72 bg-[#050e1fde] shadow-2xl shadow-black rounded-lg text-white p-4 flex flex-col justify-between items-center">
                    <h1 className="text-2xl md:text-3xl font-bold">{cityName || weatherData.name}</h1>
                    <img src={sun} alt="WeatherImage" className='w-24 select-none' />
                    <Clock />
                </div>
                {/*Right section-weather Details*/}
                <div className='flex-grow h-auto md:h-72 bg-[#050e1fde] rounded-lg text-white p-4 flex flex-col justify-around md:flex-row items-center md:items-stretch gap-4'>
                    {/* Tempreture and sunrise and sunset */}
                    <div className='flex flex-col items-center justify-between xl:justify-center gap-6 md:gap-4'>
                        <h1 className='text-5xl md:text-7xl font-bold'>{main.temp}&#8451;</h1>
                        <p>Feels like: <span className='text-lg md:text-xl ml-1.5 font-bold' >{main.feels_like}&#8451;</span>
                        </p>
                        <div className='flex xl:flex-col md:flex-row items-center gap-4 '>
                            <div className='flex items-center gap-2'>
                                <img src={sunrise} alt="" className='h-8 md:h-10 select-none' />
                                <div className='text-center'>
                                    <h6>Sunrise</h6>
                                    <p>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={sunset} alt="" className='h-8 md:h-10 select-none' />
                                <div className='text-center'>
                                    <h6>Sunset</h6>
                                    <p>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* main weather icon */}
                    <div className='flex flex-col justify-center items-center'>
                        <img src={weatherIconUrl} alt="" className='w-36 md:w-52 md:h-30 select-none' />
                        <p className='font-bold text-xl md:text-3xl '>{weather[0].description}</p>
                    </div>

                    {/* additional information */}
                    <div className='md:grid md:grid-cols-2 flex flex-row justify-between gap-4 md:p-4'>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={humidity} alt="humidity" className='h-8 md:h-10 select-none' />
                            <p>{main.humidity}%</p>
                            <h6>Humidity</h6>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={Wind} alt="windSpeed" className='h-8 md:h-10 select-none' />
                            <p>{wind.speed}km/hr</p>
                            <h6>Wind Speed</h6>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={pressure} alt="pressure" className='h-8 md:h-10 select-none' />
                            <p>{main.pressure} hPa</p>
                            <h6>Pressure</h6>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={UV} alt="uv" className='h-8 md:h-10 select-none' />
                            <p>{uvIndex !== null ? uvIndex : 'N/A'}</p>
                            <h6>UV</h6>
                        </div>
                    </div>
                </div>
            </div>
            <ForeCast forecast={list} />
        </>
    );
}
export default CityAndTime