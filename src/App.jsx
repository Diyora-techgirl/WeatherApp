import { useState } from 'react';
import './App.css';
import search from './assets/icons/search.png';
import { useStateContext } from './Context';
import { BackgroundLayout, WeatherCard, MiniCard, SoundControl } from './components';
import Loader from './components/Loader';

function App() {
  const [input, setInput] = useState('');
  const { weather, location, values, place, setPlace, loading } = useStateContext();
  
  const submitCity = () => {
    if (input && input.toLowerCase() !== place.toLowerCase() && input !== "") {
      setPlace(input);
      setInput('');
    }
  };

  return (
    <div className='w-full h-screen text-white px-8'>
      {/* Fixed Navbar */}
      <nav className='fixed top-0 left-0 w-full p-3 flex justify-between items-center bg-black bg-opacity-60 backdrop-blur-md z-10'>
        <h1 className='font-bold tracking-wide font-pacifico text-white text-3xl'>Weather App</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input 
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity();
              }
            }} 
            type="text" 
            placeholder='Search city' 
            className='focus:outline-none w-full text-[#212121] text-lg' 
            value={input} 
            onChange={e => setInput(e.target.value)} 
          />
        </div>
      </nav>
      
      {/* Background Layout */}
      <BackgroundLayout />

      {/* Sound Control */} 
      <SoundControl conditions={weather.conditions} />

      {/* Main Content */}
      <main className='w-full flex-grow mt-16 grid grid-cols-2 gap-8 py-4 px-[10%] items-center justify-center'>
      {loading ? ( <>
        <div className="overlay"></div>
        <Loader />
        </>
                  
                ) : (
                    <>
        <WeatherCard
          place={location}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        
        <div className='grid justify-center gap-20 grid-cols-3 grid-row-2'>
          {values?.slice(1, 7).map((curr) => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
        </>
      )} 
      </main>
    </div>
  );
}

export default App;
