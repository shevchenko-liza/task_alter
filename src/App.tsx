import React from 'react'

import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home-page';
import { News } from './components/News';


function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
