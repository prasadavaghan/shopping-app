import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './component/Category/Category';
import Product from './component/Product/Product';
import Productdetails from './component/Product_Details/Productdetails';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Category />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/productdetails/:productname' element={<Productdetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
