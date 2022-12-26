import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/contacts' element={<}></Route>
        <Route></Route>
      </Route>
    </Routes>
  );
};

<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />}/>
    <Route
      path="/register"
      element={
        <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
      }
    />
    <Route
      path="/login"
      element={
        <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
      }
    />
    <Route
      path="/contacts"
      element={
        <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
      }
    />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>;
