import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import Home from './Pages/Home';
import store from './redux/store';
import { Provider } from 'react-redux';
import { About } from './Pages/About';
import Pizza from './Pages/ProductPages/Pizza';
import Burger from './Pages/ProductPages/burger';
import Juice from './Pages/ProductPages/juice';
import Noodle from './Pages/ProductPages/noodles';
import Cart from './Pages/Cart';
import ContactUs from './Pages/ContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/burger' element={<Burger />} />
          <Route path='/juice' element={<Juice />} />
          <Route path='/noodle' element={<Noodle />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
