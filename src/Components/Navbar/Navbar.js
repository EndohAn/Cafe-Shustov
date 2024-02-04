

 import"./Navbar.css";
 import React, {  useRef, useState } from 'react'
 import logo from '../Assets/logo.png'
 
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../Redux/cartSlice";

 import cart_icon from '../Assets/cart_icon.png'
 import nav_dropdown from '../Assets/nav_dropdown.png'
 import { Link } from 'react-router-dom'
 import tel_icon from '../Assets/tel_icon.png'



 
 const Navbar =()=>{
  const totalQuantity = useSelector ( getTotalQuantity )
   
   const [menu,setMenu] = useState("home"); 
   const menuRef = useRef();
   
   const dropdown_toggle = (e) => {
     menuRef.current.classList.toggle('nav-menu-visible');
     e.target.classList.toggle('open');
    }
    
    return (
      
       <header className="header">   
      
          <div className='nav'>
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>Шустов Шеф</p>
        </div>

        <div className="header-contact">                      
                     
                      <img src={tel_icon} className="contact-icon" alt ="icon"/>
                              <a href="tel:+7 (914) 000-00-59" className="header-contact_link">
                                        +7 (914) 000-00-59  </a>
                              
                            </div>



              <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
                <div className="nav-cart-count">{totalQuantity}</div>
              </div>

      </div>
      <nav className="navbar">
        <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="menu" />
        <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'> На главную </Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("menu")}}><Link style={{ textDecoration: 'none' }} to='/menu'>Меню </Link>{menu==="menu"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none' }} to='/about'>О нас </Link>{menu==="about"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("delivery")}}><Link style={{ textDecoration: 'none' }} to="/delivery">Доставка и оплата </Link>{menu==="delivery"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contacts")}}><Link style={{ textDecoration: 'none' }} to='/contacts'>Контакты</Link>{menu==="contacts"?<hr/>:<></>}</li>
              </ul>
      </nav>
      </header>
      
) 
}
export default Navbar;






//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
