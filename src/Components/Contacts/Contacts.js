import React from 'react';
import './Contacts.css'
import adress_icon from '../Assets/adress_icon.png'
import telephone_icon from '../Assets/tel_icon.png'
import mail_icon from '../Assets/mail_icon.png'
import time_icon from '../Assets/time_icon.png'


const Contacts=()=>{
 return(
    <div>
    <div className='contacts'>
        <div className ="contacts-title"> 
            <h2>КОНТАКТЫ</h2>
        </div>         
        <div className='contacts-wrapper'>
        

            <div className='cont-inner'>
                         <img src ={adress_icon}  alt="adress-icon"/>                        
                         <div className='contacts-text size-box '> 
                          <div>
                            <p>Адрес</p>
                         </div>
                            <p> г.Комсомольск-на Амуре,<br/>пр.Ленина 25  </p>
                         </div>
            </div>
            <div className='cont-inner'>
                         <img src ={time_icon} alt='time_icon'/>
                         <div className='contacts-text size-box '> 
                          <div>
                            <p>График работы</p>
                         </div>
                            <p>                                
                              График работы: ПН-ВСК,<br/>
                               10:00-22:00                             
                            </p>
                         </div>
            </div>

            <div className='cont-inner'>
                            <img src ={telephone_icon} alt ="tel-icon"/>
                         <div className='contacts-text size-box'>
                            <div>
                                <p> Телефон </p>
                            </div>
                         <a href="tel:+7 (914) 000-00-59" >
                                        +7 (914) 000-00-59  </a>                            
                         </div>
            </div>

            <div className='cont-inner'>
                            <img src ={mail_icon} alt="mail_icon"/>
                         <div className='contacts-text size-box'>
                            <div>
                                <p> Эл. почта</p>
                            </div>
                            <a href='mailto:shustophCafe@mail.ru'  > shustophCafe@mail.ru</a>
                         </div>  
            </div>
        </div>  
    </div>
       
        </div>
 )
}

export default Contacts;