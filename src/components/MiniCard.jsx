/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState(sun); // Default icon

  useEffect(() => {
    if (iconString) {
      const iconLowerCase = iconString.toLowerCase();

      if (iconLowerCase.includes('sunny') || iconLowerCase.includes('clear')) {
        setIcon(sun);
      } else if (iconLowerCase.includes('cloud')) {
        setIcon(cloud);
      } else if (iconLowerCase.includes('rain') || iconLowerCase.includes('shower')) {
        setIcon(rain);
      } else if (iconLowerCase.includes('thunderstorm') || iconLowerCase.includes('thunder')) {
        setIcon(storm);
      } else if (iconLowerCase.includes('fog')) {
        setIcon(fog);
      } else if (iconLowerCase.includes('snow')) {
        setIcon(snow);
      } else if (iconLowerCase.includes('wind')) {
        setIcon(wind);
      } else {
        setIcon(sun); // Optional: Default icon if no match
      }
    }
  }, [iconString]);


  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col card-3d'>
      <p className='text-center text-scale'>
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="weather_icon" className='w-[4rem] h-[4rem] animated-icon' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard