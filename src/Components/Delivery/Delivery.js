import React from 'react';
// import {Link} from "react-router-dom";
import'./Delivery.css'
import money from '../Assets/money.png'
import credit_card from '../Assets/credit_card.png'
import ship_steps from '../Assets/ship_steps.png'


const Delivery =()=>{
          return(
            <section className='delivery-section'>                          
            <div className ='delivery'>
                    <div className='delivery-title'>
                        <p>
                            Доставка и оплата
                        </p>
                    </div>
                    <div className='delivery-subtitle'>
                       <p>  Для осуществления заказа Вам необходимо:
                       </p>
                    </div>
               
                    <div className='delivery-inner'>
                        <div className='inner-left'>                           
                                <div className='inner_left-icon'>
                                    <img src={ship_steps} alt='icon'/>                                
                                </div>
                        </div>
                            <div className='inner-right'>
                                <div className='inner-right_wrapper'>
                                    <div className='wrapper'>
                                        <p><strong>Оформить заказ на сайте: </strong>
                                        выбрать в меню интересующие вас блюда, добавить их в корзину, заполнить контактные данные в диалоговом окне и оформить заказ
                                        </p>
                                    </div>
                                    <div className='wrapper'>
                                        <p>Или звонить по номеру <a href='tel:+7 (914) 000-00-59' target='_blank' rel='noreferrer' className="contact_link"> +7 (914) 000-00-59 </a>
                                        
                                        </p>
                                    </div>
                                    <div className='wrapper'>
                                        <p>
                                        После получения заявки,<strong>в течение 15 минут</strong> , наш менеджер свяжется с вами по указанному номеру телефона для подтверждения заказа. С ним вы можете провести корректировку заказа и его стоимости, обсудить время доставки и прочие условия.
                                        </p>
                                    </div>
                                    <div className='wrapper'>
                                        <p>                                          
                                           <strong> ЕСЛИ НАШ МЕНЕДЖЕР НЕ СВЯЗАЛСЯ С ВАМИ В ТЕЧЕНИЕ 15 МИНУТ</strong> по указанному вами номеру телефона, и/или вы не получили на вашу электронную почту подтверждение о приеме заказа – ваш заказ считается не принятым в обработку. В этом случае вам необходимо проконтролировать состояние заказа, позвонив по телефону <a href='tel:+7 (914) 000-00-59' target='_blank'
                                            rel='noreferrer' className="contact_link"> +7 (914) 000-00-59 </a>  
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        

                    </div>
                    
              
                        <div className='payment-title'>
                            <p>Оплата заказа происходит двумя способами:</p>
                        </div>
                <div className='delivery-payment'>
                        <div className='payment-inner'>
                            <div className='payment-money'>
                                <div>
                                    <img src ={money} width='50px' alt='icon-money'/>
                                </div>
                                <div className='money-wrapper'>
                                    <h4>Наличными</h4>                                
                                <div>
                                    <p>
                                    оплачивая наличными денежными <br/>средствами непосредственно курьеру
                                    </p>
                                </div>                               
                                </div>
                            </div>
                            <div className='payment-credit_card'>
                                <div>
                                    <img src= {credit_card}  width='50px' alt='icon-card'/>
                                </div>
                                <div  className= 'money-wrapper'>
                                    <h4>Онлайн оплата </h4>                               
                                <div>
                                    <p>при оформлении заказа с помощью банковской карты </p>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>                   
       

        </section>





    )
}
export default Delivery;