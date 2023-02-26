import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { redirect} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home-page';
import { News } from './components/News';
import { Profile } from './components/Profile/Profile';
import { User } from './components/User';
import { CATALOG, Posts } from './store/slices/catalog';

export const App =()=>{

  return (
    <div>
      <Home />
   
      <Routes>
        <Route path='/' element={<Home />} /> 
           <Route path='/news' element={<News />}/>
           <Route path='/profile' element={<Profile />}/>
           <Route path='/user' element={<User />}>
            </Route>
      </Routes>
    </div>
  );
}


