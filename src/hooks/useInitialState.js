import { useState, useEffect } from 'react';
let initialState = {
  temperature: 'C',
  speed: 'K',
  location: '',
  defaultLocation: '3.4129,-76.5191',
  myCities: [],
};

const useInitialState = () => {
  const [preferences, setPreferences] = useState(initialState);
  const [weather, setWeather] = useState({});

  const setTemperature = (payload) => {
    setPreferences({ ...preferences, temperature: payload });
    localStorage.setItem('temperature', payload);
  };

  const setSpeed = (payload) => {
    setPreferences({ ...preferences, speed: payload });
    localStorage.setItem('speed', payload);
  };

  const setLocation = (payload) => {
    setPreferences({ ...preferences, location: payload });
  };

  useEffect(() => {
    const temperatureLocal = localStorage.getItem('temperature');
    const speedLocal = localStorage.getItem('speed');
    if (temperatureLocal) {
      setPreferences((state) => {
        return {
          ...state,
          temperature: temperatureLocal,
        };
      });
    }
    if (speedLocal) {
      setPreferences((state) => {
        return { ...state, speed: speedLocal };
      });
    }
  }, []);

  return { preferences, setTemperature, setSpeed, setLocation, weather, setWeather };
};

export default useInitialState;
