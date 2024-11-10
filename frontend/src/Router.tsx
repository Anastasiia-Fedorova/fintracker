import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  CustomRouter,
  GuestRoutes,
} from './components/routes';
import { SignIn } from './pages/auth/sign-in';
import {SignUp} from './pages/auth/sign-up';

const Router = () => (
  <CustomRouter>
    <Routes>
      <Route element={<GuestRoutes />}>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />}/>
      </Route>
    </Routes>
  </CustomRouter>
);

export default Router;
