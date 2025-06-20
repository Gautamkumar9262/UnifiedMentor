
//new
import logo from '../assets/logo.png';
import search from '../assets/searche.png';
import location from '../assets/location.png';
import { useState } from 'react';
import { toast } from 'react-toastify'; // Fixed import
// Remove <link rel="stylesheet" ... /> from JS file

const NavBar = ({ onCitySearch, onLocationFetch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery) {
            onCitySearch(searchQuery);
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    onLocationFetch(latitude, longitude);
                },
                (error) => {
                    console.log(error);
                    toast.error("Location access denied or unavailable.");
                }
            );
        } else {
            toast.error("Geolocation is not supported by your browser.");
        }
    };

    return (
        <div className="m-4">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                {/* Logo Section */}
                <img src={logo} alt="logo" className='w-32 select-none' />

                {/* Search bar section */}
                <form onSubmit={handleSearchSubmit} className='relative flex items-center justify-center w-full max-w-md bg-white shadow-md rounded-lg'>
                    <img src={search} alt="search" className='absolute left-3 w-4 h-4 text-gray-400 select-none' />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchQuery}
                        placeholder='Search city'
                        className='w-full py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 border-none rounded-lg outline-none'
                    />
                    <button type='submit' className='bg-[#050e1fde] text-white px-5 py-2 rounded-r-lg'>Search</button>
                </form>
                <div
                    onClick={handleLocationClick}
                    className='flex items-center gap-3 px-4 text-sm font-medium text-white bg-green-500 rounded cursor-pointer'
                >
                    <img src={location} alt="location" className='w-8'/>
                    <p>Current Location</p>
                </div>
            </div>
        </div>
    );
};
export default NavBar
    