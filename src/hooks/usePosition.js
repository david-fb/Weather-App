import { useState, useEffect } from 'react';
export const usePosition = () => {
  const [position, setPosition] = useState({ lon: null, lat: null });
  const [error, setError] = useState(null);

  const onSuccess = ({ coords }) => {
    setPosition({ lon: coords.longitude, lat: coords.latitude });
  };

  const onError = (error) => {
    setPosition({ lon: null, lat: null });
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    geo.getCurrentPosition(onSuccess, onError);

    navigator.permissions.query({ name: 'geolocation' }).then(function (permissionStatus) {
      permissionStatus.onchange = function () {
        geo.getCurrentPosition(onSuccess, onError);
      };
    });
  }, []);

  return { ...position, error };
};
