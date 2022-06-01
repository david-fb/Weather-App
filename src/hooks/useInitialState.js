import { useState, useEffect } from 'react';
let initialState = {
  temperature: 'C',
  speed: 'K',
  pressure: 'M',
  location: '',
  defaultLocation: '3.4129,-76.5191',
  myCities: [],
  loadingCities: true,
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

  const setMyCities = (payload) => {
    setPreferences({ ...preferences, myCities: [...preferences.myCities, payload] });
    localStorage.setItem('myCities', JSON.stringify([...preferences.myCities, payload]));
  };

  const removeCity = (payload) => {
    setPreferences({ ...preferences, myCities: preferences.myCities.filter((city) => city !== payload) });
    localStorage.setItem('myCities', JSON.stringify(preferences.myCities.filter((city) => city !== payload)));
  };

  useEffect(() => {
    const temperatureLocal = localStorage.getItem('temperature');
    const speedLocal = localStorage.getItem('speed');
    const myCities = localStorage.getItem('myCities') ? JSON.parse(localStorage.getItem('myCities')) : null;
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
    if (myCities) {
      setPreferences((state) => {
        return { ...state, myCities: myCities, loadingCities: false };
      });
    } else {
      localStorage.setItem('myCities', JSON.stringify([]));
    }
  }, []);

  return { preferences, setTemperature, setSpeed, setLocation, weather, setWeather, setMyCities, removeCity };
};

export default useInitialState;
