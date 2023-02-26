import React from 'react'

import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home-page';
import { Header } from './components/Home-page/header';
import { News } from './components/News';
import { Profile } from './components/Profile/Profile';
import { User } from './components/User';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user' element={<User />}>
        </Route>
      </Routes>
    </div>
  );
}


