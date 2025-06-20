import { useState } from 'react';
import React  from 'react';
import NavBar from './components/NavBar.jsx';
import CityAndTime from './components/CityAndTime.jsx';
import './input.css'; // Assuming you have some styles in App.css
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [cityName, setCityname]=useState('')
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

  const handleCitySearch = (city) =>{
    setCityname(city)
    setLat(null)
    setLon(null)
  }

  const handleLocationFetch = (latitude, logitude)=>{
    setLat(latitude)
    setLon(logitude)
    setCityname('')
  }

  return (
    <div className='container  mx-auto'>
    <ToastContainer/>
    <div className='w-full h-full'>
    <NavBar onCitySearch={handleCitySearch} onLocationFetch ={handleLocationFetch}/>
    </div>
    <div>
    <CityAndTime cityName={cityName} lat={lat} lon={lon} setLat={setLat} setLon={setLon}/>
    </div>
  </div>
  )
 }

export default App;