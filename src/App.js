import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import CheckOut from './Components/CheckOut/CheckOut';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import AboutMe from './Components/AboutMe/AboutMe';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Products from './Components/Products/Products';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  return (
    <div>
      <Toaster></Toaster>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Products></Products>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/contactus' element={<ContactForm></ContactForm>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
