import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DribbbleShotsContext = createContext();

const DribbbleShotsProvider = ({ children }) => {
  const baseURL = 'https://api.dribbble.com/v2/user/shots?access_token=a9567710a774c181de829355bb007d3e20dab01e6d0b41af5b91715496caba2b';

  const [shotsData, setShotsData] = useState([]);


  useEffect(() => {
    const connectDribbble = async () => {
      const url = `${baseURL}`;
      const res = await axios.get(url);
      setShotsData(res.data);
    };
    connectDribbble();
  }, []);

  return (
    <DribbbleShotsContext.Provider value={{
      shotsData,
    }}
    >
      {children}
    </DribbbleShotsContext.Provider>
  );
};

export default DribbbleShotsProvider;
