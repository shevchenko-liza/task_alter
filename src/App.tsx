import React, { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom';

import { Home } from './components/Home-page';
import { Footer } from './components/Home-page/footer';
import { Header } from './components/Home-page/header';
import { News } from './components/News';
import { Profile } from './components/Profile/Profile';
import { User } from './components/User';

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user' element={<User />}>
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
}


