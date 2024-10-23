import { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import Sunny from '../assets/images/Sunny.gif'
import Clear from '../assets/images/Clear.jpg'
import Cloudy from '../assets/images/Cloudy.jpg'
import Fog from '../assets/images/fog.gif'
import Rainy from '../assets/images/rain.gif'
import Snow from '../assets/images/snow.gif'
import Stormy from '../assets/images/stormy.gif'

const BackroundLayout = () => {
  const {weather}=useStateContext()
  console.log(weather);
  const [image, setImage]=useState(Clear)
  
  useEffect(() => {
    if (weather.conditions) {

      let imageString = weather.conditions.toLowerCase();

      if (imageString.includes('clear')) {
        setImage(Clear);
      } else if (imageString.includes('cloud')) {
        setImage(Cloudy);
      } else if (imageString.includes('sunny')) {
        setImage(Sunny);
      } else if (imageString.includes('rain') || imageString.includes('shower')) {
        setImage(Rainy);
      } else if (imageString.includes('snow')) {
        setImage(Snow);
      } else if (imageString.includes('fog')) {
        setImage(Fog);
      } else if (imageString.includes('thunder') || imageString.includes('storm')) {
        setImage(Stormy);
      } else {
        setImage(Clear); // Default image if no conditions match
      }
    } else {
      setImage(Clear); // Default image if conditions are undefined
    }
  }, [weather]);

  return (
    <div
      className="h-full w-full fixed left-0 top-0 -z-[10] bg-cover bg-center"
      style={{
        backgroundSize:'100% 100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
      }}
    ></div>
  )
}

export default BackroundLayout
