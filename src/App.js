import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import Home from './Pages/Home';
import { AuthProvider } from './Authentication/AuthContext'; 
import ProtectedRoute from './Authentication/ProtectedRoute';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route 
            path='/' 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
