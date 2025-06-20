// import { useEffect, useState } from "react"
// const Clock = () =>{
//     const [currentTime, setCurrentTime]=useState(new Date() )

//     useEffect(()=>{
//         const timer = setInterval(()=>{
//             setCurrentTime(new Date())
//         },1000)
//         return () => currentTime(timer)
//     })
// return(
//     <div className="flex flex-col items-center">
//         <h1 className="text-5xl md:text-7xl font-bold">{new Date().toLocaleTimeString}</h1>
//         <p className="text-sm md:text-md font-medium">{new Date().toLocaleDateString}</p>
//     </div>
// )
// }
// export default Clock

import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setCurrentDate(new Date().toLocaleDateString());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl md:text-5xl font-bold">{currentTime}</h1>
      <p className="text-md font-medium">{currentDate}</p>
    </div>
  );
};

export default Clock;