import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Details from '../pages/details/Details';
const RoutesPath = () => {
  return (
    <Routes>
        <Route path='/:category/:search/:keyword' element={<Catalog />}/>
        <Route path='/:category/:id' element={<Details />}/>
        <Route path='/:category' element={<Catalog />}/>
        <Route path='/' exact = 'true' element={<Home />}/>
    </Routes>
  )
}

export default RoutesPath;