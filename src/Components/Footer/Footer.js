import React from 'react';
import {Link} from "react-router-dom";
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon  from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <footer className="footer">
                
            <nav className="footer_nav">

                <div className="footer_info">
                   <div  className='logo_block'>
                        <div className='footer-logo'>
                        <img src={logo} width="40px" alt="logo" />
                        <p className='footer-title'>Шустов Шеф</p>
                        </div>                    
                    </div>                   
                    <div className="footer-social-icon">
                        <div className="footer-icons-container">
                        <img src={instagram_icon} alt="" />
                    </div>          
                    <div className="footer-icons-container">
                        <img src={whatsapp_icon} alt="" /> 
                    </div>
                </div>
                </div>


                    <div className='footer_contacts-wrapper'>
                         <div>
                            <p>                                
                              График работы: ПН-ВСК,<br/>
                               10:00-22:00                             
                            </p>
                         </div>
                         <div>
                         <a href="tel:+7 (914) 000-00-59" className="contact_link">
                                        +7 (914) 000-00-59  </a>                            
                         </div>
                         <div>
                            <a href='mailto:shustophCafe@mail.ru' className="contact_link" > shustophCafe@mail.ru</a>
                         </div>                                               
                    </div>


                <div className='footer-doc_wrapper'>
                        <div>
                            <a href="!#" className="footer_doc">
                                Пользовательское соглашение
                            </a>
                        </div>
                        <div>
                            <a href="!#" className="footer_doc">
                                Карта сайта
                            </a>
                        </div>
                        <div>
                            <a href="!#" className="footer_doc">
                                Политика конфиденциальности
                            </a> 
                        </div>
                    </div>                
                
                <div className='footer_menu-wrapper'>
                <ul className="footer_menu">
                    <li className="footer_item">
                        <Link to="/" className="footer_link">
                            На главную
                        </Link>
                    </li>
                    <li className="footer_item">
                        <Link to="/menu" className="footer_link">
                            Меню
                        </Link>
                    </li>
                    <li className="footer_item">
                    <Link to="/about" className="footer_link">
                            О нас
                        </Link>                        
                    </li>
                    <li className="footer_item">
                        <Link to="/delivery" className="footer_link">
                            Доставка и оплата
                        </Link>
                    </li>
                    <li className="footer_item">
                        <Link to="/contacts" className="footer_link">
                            Контакты
                        </Link>
                       
                    </li>
                  </ul>
                </div>
        </nav>
            <div className="footer-copyright">
         <hr />
          <p>   © Все права защищены. 2024 </p>
        </div>               
        </footer>
    )
}

export default Footer;



