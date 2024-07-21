//import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SignIn from './pages/Sign_in';
import Product from './pages/Store';
import CartPage from './pages/CartPage';
import About from './pages/About';

function App() {

  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/signin' element={<SignIn />} />
       <Route path='/product' element={<Product />} />
       <Route path='/cart' element={<CartPage/>} />
       <Route path='/about' element={<About />} />

     </Routes>
    </BrowserRouter>
  );

}

export default App
