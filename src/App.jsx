import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Auth_dash from './components/Auth/auth_pages/auth_components/Auth_dash';

//Import Reusable Components.
import Header from './components/Header';
import Footer from './components/Footer';


//Import Guest files.
import Landing from './pages/Guest/Landing';
import Register from './pages/Guest/Register';
import Login from './pages/Guest/Login';

//Import User Files.
import Profile from './pages/User/Profile';
import ProtectedRoutes from './utils/ProtectedRoutes';

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
          <Route path="/landing" element={<Landing/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <Auth_dash/> */}
    </>
  );
}

export default App;
