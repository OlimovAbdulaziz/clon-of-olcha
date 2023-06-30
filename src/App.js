import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './router/home/Home';
import Wishlist from './router/wishlist/Wishlist';
import Login from './router/login/Login';
import Chart from './router/chart/Chart';
import SingleRoute from './router/singleRoute/SingleRoute';
import Scroll from './components/scroll/Scroll';
import Admin from './router/admin/Admin';
import Auth from './router/auth/Auth';
import ScrollToTop from 'react-scroll-to-top';
import { ToastContainer } from 'react-toastify';
import FooterTop from './components/footer/FooterTop';

function App() {
  return (
    <div className="App">
      <Scroll />
      <Navbar />
      <ScrollToTop smooth />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/' element={<Auth/>}>
        <Route path='/admin/*' element={<Admin />} />
        </Route>
        <Route path='/product/:id' element={<SingleRoute />} />
      </Routes>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default App;