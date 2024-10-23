/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React, { useEffect } from 'react';
import rainSound from '../assets/sound/rain.mp3';
import clearSound from '../assets/sound/clear.mp3';
import sunnySound from '../assets/sound/sunny.mp3'; 
import cloudySound from '../assets/sound/cloudy.mp3'; 
import windySound from '../assets/sound/windy.mp3';
import stormySound from '../assets/sound/stormy.mp3';

const SoundPlayer = ({ conditions, playSound }) => {
  useEffect(() => {
    
    const sounds = {
      rain: new Audio(rainSound),
      sunny: new Audio(sunnySound),
      cloudy: new Audio(cloudySound),
      windy: new Audio(windySound),
      clear: new Audio(clearSound),
      stormy:new Audio(stormySound)
    };

    // Stop all sounds first
    Object.values(sounds).forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });

    if (playSound) {
      const conditionArray = conditions.toLowerCase().split(', ');

      // Check for specific conditions
      if (conditionArray.includes('rain')) {
        sounds.rain.play();
      }
      else if (conditionArray.includes('sunny')) {
        sounds.sunny.play();
      }
      else if (conditionArray.includes('cloud')) {
        sounds.cloudy.play();
      }
      else if (conditionArray.includes('windy')) {
        sounds.windy.play();
      }
      else if (conditionArray.includes('stormy')) {
        sounds.stormy.play();
      }
      else if (conditionArray.includes('clear')) {
        sounds.clear.play();
      }
      else if (conditionArray.includes('snow')) {
        sounds.cloudy.play();
      }

    }

    // Clean up on unmount and reset sounds
    return () => {
      Object.values(sounds).forEach((sound) => {
        sound.pause();
        sound.currentTime = 0; // Reset on cleanup as well
      });
    };
  }, [conditions, playSound]);

  return null;
}

export default SoundPlayer;
