import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { PrivateRoute } from '../components/PrivateRout';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage  = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const NotFound = lazy(() => import('./NotFound'));


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<RegisterPage />}/>} />
        <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />}/>} />
        <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<ContactsPage />}/>} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};


