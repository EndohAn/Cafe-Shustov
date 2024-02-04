
import  './Card.css'

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart, getCartItems } from "../../Redux/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({good}) => {     

      const dispatch = useDispatch();
      const [quantity, setQuantity] = useState(1);

      const cartItems = useSelector( getCartItems  )

      const goodsInCart = cartItems.some ( item => item.id === good.id)
      const putToCart = () => {
              if (!goodsInCart) {
                  dispatch (addItemToCart ( {good, quantity} )) 
                  const notify = () => toast.success("Добавлено в корзину", {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                  });
                  notify()
                }
              }

    return (
    
          < div className="product-card">       

          <div className="product-img" >
            <img src={good.img}  alt ="good"/>         
          </div>
          <div className="product-title"> 
          <p>{good.name}</p>
          <p className="price-title">{good.price} рублей</p>
          </div> 
          <div className="product-descr">
              <p>{good.descr} </p> 
          </div>
          <div className="addLine">
          <div className="quantity">
          <ChangeQuantity quantity={quantity}setQuantity={setQuantity}/>
          <button className="  add-to-cart-btn" onClick= { putToCart } >Добавить в корзину</button> 
             <ToastContainer 
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
          /> 
          </div>
          </div>
          <div className="line"></div>
          </div>
  )
}

export default Card