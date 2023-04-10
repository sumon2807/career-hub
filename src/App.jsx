import React, { createContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Home from './components/Home/Home';

export const FeaturedContext=createContext('data');

const App = () => {

const [features, setFeatures]=useState([])

  useEffect(()=>{
    fetch('featured.json')
    .then(res=>res.json())
    .then(data=>setFeatures(data))
  },[])
  return (
    <div>
      <FeaturedContext.Provider value={features}>
        <Header></Header>
        <Outlet></Outlet>
      </FeaturedContext.Provider>
    </div>
  );
};

export default App;