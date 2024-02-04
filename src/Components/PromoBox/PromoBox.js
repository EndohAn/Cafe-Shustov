import React from "react";
import './PromoBox.css'
import arrow_icon from '../Assets/arrow_icon.png';
import { useNavigate} from "react-router-dom";


function PromoBox(){

    const navigate = useNavigate()

    return(       
        
        <section className="promoBox">
       
            <div className="promoBox-content">
                <h2 className="promoBox-title">
                    Шашлыки на любой вкус, <br/>
                    попробуй !!!
                </h2>
               
            </div>          


        <div className="promoBox-btn_block">
                <button className="promoBox-btn" onClick ={() =>{
                    navigate('/menu')
                }}>
                        <div>Посмотреть меню</div>
                        <img src= {arrow_icon} alt="icon"/>
                    </button>
                    </div>
    </section> 




    )
}
export default PromoBox