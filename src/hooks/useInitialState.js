import { useState } from 'react';
let initialState = {
  temperature: 'C',
  distance: 'K',
  location: '',
};

const useInitialState = () => {
  const [preferences, setPreferences] = useState(initialState);

  const setTemperature = (payload) => {
    setPreferences({ ...preferences, temperature: payload });
    localStorage.setItem('temperature', payload);
  };

  const setDistance = (payload) => {
    setPreferences({ ...preferences, distance: payload });
    localStorage.setItem('distance', payload);
  };

  const setLocation = (payload) => {
    setPreferences({ ...preferences, location: payload });
  };

  return { preferences, setTemperature, setDistance, setLocation };
};

export default useInitialState;
