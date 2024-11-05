import {BrowserRouter, Route,  Routes, Navigate} from 'react-router-dom';
import { history } from '../App';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { LoginForm } from '../pages/LoginPage/LoginPage';
import { RegistrationForm } from '../pages/RegistrationPage/RegistrationPage';

export const Main = ({auth}) =>

  <main >
    <BrowserRouter history = {history}>
      
        <Routes>
          <Route path={'/'} element={<Dashboard/>} />
          <Route path={'/login'} element={<LoginForm/>} />
          <Route path={'/registration'} element={<RegistrationForm/>} />
          <Route path={'/dashboard'} element={<Dashboard/>} />

          {/* <Route exact path="/"> <Navigate to="/login" /> </Route> */}
        </Routes>
    
    </BrowserRouter>
  </main>