import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Auth_dash from './auth_pages/auth_components/Auth_dash';
import Register from './pages/Register'
import Footer from "./components/Footer";
import Login from "./pages/Login"
function App() {
  
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      <Auth_dash/>j
      <Footer/>
    </>
  );
}

export default App;