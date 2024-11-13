import React from 'react';
import {Route, Routes, } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';
import {SignIn} from './pages/auth/sign-in';
import {SignUp} from './pages/auth/sign-up';
import {history} from "./store/root";

const Router = () => (
    <HistoryRouter history={history}>
        <Routes>

            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>

        </Routes>
    </HistoryRouter>
);

export default Router;