import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  CustomRouter,
} from './components/routes';
import { SignIn } from './pages/auth/sign-in';
import { SignUp } from './pages/auth/sign-up';

const Router = () => (
  <CustomRouter>
    <Routes>

        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />}/>

    </Routes>
  </CustomRouter>
);

export default Router;
