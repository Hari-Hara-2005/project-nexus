import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import Home from './Pages/Home';
import { AuthProvider } from './Authentication/AuthContext'; 
import ProtectedRoute from './Authentication/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route 
            path='/home' 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
