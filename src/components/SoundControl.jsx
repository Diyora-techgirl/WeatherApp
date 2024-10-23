/* eslint-disable react/prop-types */
import { useState } from 'react';
import SoundPlayer from './SoundPlayer'

const SoundControl = ({ conditions }) => {
  const [playSound, setPlaySound] = useState(false);

  const PlaySound = () => {
    setPlaySound(true);
  };

  const StopSound = () => {
    setPlaySound(false);
  };

  return (
    <div>
      <SoundPlayer conditions={conditions} playSound={playSound} />
      <div className='fixed bottom-5 left-5'>
        <button
          onClick={PlaySound}
          className='bg-blue-500 text-white p-3 rounded shadow-lg'
        >
          Play Sound
        </button>
      </div>
      <div className='fixed bottom-20 left-5'>
        <button
          onClick={StopSound}
          className='bg-red-500 text-white p-3 rounded shadow-lg'
        >
          Stop Sound
        </button>
      </div>
    </div>
  );
};

export default SoundControl;
