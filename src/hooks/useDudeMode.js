import { useState, useEffect } from 'react';

export const useLocalStorage = (key, init) => {
  if (typeof key !== 'string') {
    throw new Error('must be a string');
  }

  const [storedValue, setStoredValue] = useState(() => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : init;
  });

  const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };
  return [storedValue, setValue];
};

export const useDudeMode = () => {
  const [dudeMode, setDudeMode] = useLocalStorage('dude');
  useEffect(() => {
    if (dudeMode) {
      document.querySelector('.wrapper').classList.add('dude-mode');
    } else {
      document.querySelector('.wrapper').classList.remove('dude-mode');
    }
  }, [dudeMode]);

  const toggleDude = e => {
    e.preventDefault();
    setDudeMode(!dudeMode);
  };
  return [dudeMode, toggleDude];
};
