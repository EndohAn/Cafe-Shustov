

import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from "./CartItem";
import { getTotalQuantity } from "../../Redux/cartSlice";
import { Link} from "react-router-dom";


const Cart = () => {

    const cartItems = useSelector( getCartItems );
    const totalPrice = useSelector ( getTotalPrice );
    const fixedTotalPrice = totalPrice.toFixed(2)
    const totalQuantity = useSelector ( getTotalQuantity )

   

    return (
        <div className="cart-wrapper">

            <h2 className="subTitle">Ваша корзина</h2>
            {cartItems.length === 0 ? (
                <div className="empty-cart-box">
                    <h4 className="cart-title">Ваша корзина пуста</h4>
                    <button className="cart-btn"><Link to="/" className='cart-link'>Продолжить покупки</Link></button>
                </div>
                    
            ) : (
             <div className="cart">
                
                {cartItems.map ( 
                    (cartItem, id) => <CartItem key={id} cartItem={cartItem}/>
                )}
        
                <h3 className="total">Итого:  {fixedTotalPrice} рублей</h3>
                <h3 className="total">Общее количество: { totalQuantity } </h3> 
                
        
            </div>
            )}            
            
        </div>
    )
}



export default Cart;