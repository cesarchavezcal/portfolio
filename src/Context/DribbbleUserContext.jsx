import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DribbbleContext = createContext();

const DribbbleProvider = ({ children }) => {
  const baseURL = 'https://api.dribbble.com/v2/user?access_token=a9567710a774c181de829355bb007d3e20dab01e6d0b41af5b91715496caba2b';

  const [userData, setUserData] = useState([]);


  useEffect(() => {
    const connectDribbble = async () => {
      const url = `${baseURL}`;
      const res = await axios.get(url);

      setUserData(res.data);
    };
    connectDribbble();
  }, []);

  return (
    <DribbbleContext.Provider value={{
      userData,
    }}
    >
      {children}
    </DribbbleContext.Provider>
  );
};

export default DribbbleProvider;
