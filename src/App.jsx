import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Import Reusable Components.
import Header from './components/Header';
import Footer from './components/Footer';


//Import Guest files.
import Landing from './pages/Guest/Landing';
import Register from './pages/Guest/Register';
import Login from './pages/Guest/Login';

//Import User Files.
import Profile from './pages/User/Profile';
import Habit from './pages/User/Habit';
import Coach from './pages/User/Coach';
import Journal from './pages/User/Journal';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/landing" element={<Landing/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/habits" element={<Habit/>}/>
            <Route path="/coachjournal" element={<Coach/>}/>
            <Route path="/journal" element={<Journal/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
