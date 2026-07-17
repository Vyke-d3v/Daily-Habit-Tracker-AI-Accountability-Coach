import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Landing';
import Auth_dash from "./components/Auth/auth_pages/auth_components/Auth_dash";
import Register from './pages/Register';
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Landing from './pages/Landing';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Profile from './pages/Profile';
// import { Link } from 'react-router-dom';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
            <Route element={<ProtectedRoutes/>}>
            
            </Route>
          <Route path='/register' element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <Auth_dash/> */}
    </>
  );
}

export default App;
