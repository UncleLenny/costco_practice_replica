import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Product from './components/Product';
import Cart from './components/Cart';
import HomeAdmin from './components/Dashborad/HomeAdmin/HomeAdmin';
import NewProduct from './components/Dashborad/HomeAdmin/NewProduct';
import Users from './components/Dashborad/HomeAdmin/Users';
import NewUsers from './components/Dashborad/HomeAdmin/NewUsers';
import Products from './components/Dashborad/HomeAdmin/Products';
import Dashboard from './components/Dashborad/HomeAdmin/Dashboard';
import MainProd from './components/ProductFiles/MainProd';
import DataProvider from './components/DataContext/DataContext';

function App() {
  return (
    <div>
      <DataProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/Product/:id' element={<Product />} />
              <Route path='/MainProd/:id' element={<MainProd />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/HomeAdmin' element={<HomeAdmin />} />
              <Route path='/NewProduct' element={<NewProduct />} />
              <Route path='/NewUsers' element={<NewUsers />} />
              <Route path='/Products' element={<Products />} />
              <Route path='/Users' element={<Users />} />
              <Route path='/Dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
