import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register'
import Footer from "./components/Footer";
function App() {
  
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;