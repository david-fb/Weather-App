import { useState, useEffect } from 'react';
let initialState = {
  unit: 'C',
  location: '',
  lastLocation: 'cali-valle-del-cauca-colombia',
  myCities: [],
  loadingCities: true,
};

const useInitialState = () => {
  const [preferences, setPreferences] = useState(initialState);
  const [weather, setWeather] = useState({});

  const setUnit = (payload) => {
    setPreferences({ ...preferences, unit: payload });
    localStorage.setItem('unit', payload);
  };

  const setLocation = (payload) => {
    setPreferences({ ...preferences, location: payload });
    localStorage.setItem('lastLocation', payload);
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
    const unit = localStorage.getItem('unit');
    const myCities = localStorage.getItem('myCities') ? JSON.parse(localStorage.getItem('myCities')) : null;
    const lastLocation = localStorage.getItem('lastLocation');
    if (unit) {
      setPreferences((state) => {
        return {
          ...state,
          unit: unit,
        };
      });
    } else {
      localStorage.setItem('unit', preferences.unit);
    }
    if (myCities) {
      setPreferences((state) => {
        return { ...state, myCities: myCities, loadingCities: false };
      });
    } else {
      setPreferences((state) => {
        return { ...state, loadingCities: false };
      });
      localStorage.setItem('myCities', JSON.stringify([]));
    }
    if (lastLocation) {
      setPreferences((state) => {
        return { ...state, location: lastLocation, lastLocation: lastLocation };
      });
    } else {
      localStorage.setItem('lastLocation', preferences.lastLocation);
    }
  }, []);

  return { preferences, setUnit, setLocation, weather, setWeather, setMyCities, removeCity };
};

export default useInitialState;
