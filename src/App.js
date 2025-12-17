import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { mycontext } from './Pages/Context';
import { useState } from 'react';
import Register from './Pages/Register';
import Login from './Pages/Login';
import HomePage from './Pages/Home Page';
import { ProductData } from './Pages/ProductData';
import ProductDisplay from './Pages/ProductDisplay';
import Carts from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import UserProfile from './Pages/UserProfile';
import AdminLogin from './Pages/Admin/AdminLogin';
import AdminProtected from './Pages/Admin/AdminProtected';
import AdminProducts from './Pages/Admin/AdminProduct';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminUser from './Pages/Admin/AdminUser';
import Navbar from './Pages/Admin/Navbar/Navbar';
import Footer from './Pages/Admin/Navbar/Footer';
import BootPage from './Pages/BootstrapPage';
import BasicExample from './Pages/BootstrapPage';



function App() {
  const [users, setUser] = useState([])
  const [Pdata, setPdata] = useState(ProductData)
  const [like, setLike] = useState([])
  const [cart, setCart] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)
  const adminAccount = {
    email: "admin@gmail.com",
    password: "admin123"
  };
  const values = { users, setUser, Pdata, setPdata, like, setLike, cart, setCart, selectedIndex, setSelectedIndex, adminAccount, isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser }

  console.log("pData:App", Pdata)


  return (
    <div className="App">
      <BrowserRouter>
        <mycontext.Provider value={values}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Productdata' element={<ProductData />} />
            <Route path='/productdisplay' element={<ProductDisplay />} />
            <Route path='/cart' element={<Carts />} />
            <Route path='/wish' element={<Wishlist />} />
            <Route path='/userprofile' element={<UserProfile />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/adminprotected' element={<AdminProtected />} />
            <Route path='/adminproduct' element={<AdminProducts />} />
            <Route path='/admindashboard' element={<AdminDashboard />} />
            <Route path='/adminusers' element={<AdminUser />} />
            <Route path='/navbar' element={<Navbar />} />
            <Route path='/boot' element={<BasicExample />} />

          </Routes>
          <Footer />
        </mycontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
