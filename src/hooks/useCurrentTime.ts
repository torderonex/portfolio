import { useState, useEffect } from 'react';

function useCurrentTime() : string {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12; 
      const minutes = now.getMinutes();
      const ampm = now.getHours() >= 12 ? 'P.M.' : 'A.M.';
      

      const formattedTime = `${hours}:${String(minutes).padStart(2, '0')} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    const intervalId = setInterval(updateCurrentTime, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
};

export default useCurrentTime;