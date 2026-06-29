import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
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
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;