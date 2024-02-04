import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Delivery from './Components/Delivery/Delivery'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'

import Cart from './Components/Cart/Cart';
import Login from './Pages/Login';
import AllMenu from './Components/AllMenu/AllMenu';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      <Routes>
        
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<AllMenu/>}/>
      <Route path="/delivery" element={<Delivery/>}/>  
      <Route path="/contacts" element={<Contacts/>}/>  
      <Route path="/Cart" element={<Cart/>}/>        
      <Route path='/login' element={<Login/>}/>
      </Routes>
       <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;

