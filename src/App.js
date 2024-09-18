import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Authentication/Register';
import Login from './Authentication/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
