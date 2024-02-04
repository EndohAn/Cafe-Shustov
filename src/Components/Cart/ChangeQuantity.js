const ChangeQuantity = ({ quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const reduceQuantity = () => {
        if (quantity <= 1) return

        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
              
            <div className="quantity" > 
            <button className="quantity-btn" onClick={ reduceQuantity }> 
                <img className="symbol-quantity-book"  src= {process.env.PUBLIC_URL + "minus.png"} width='30px'  alt="minus" />
            </button>
            <span className=" span-quantity">{quantity}</span>
            <button className="quantity-btn" onClick={ addQuantity }>
                <img className="symbol-quantity-book"   src= {process.env.PUBLIC_URL + "plus.png"} width='30px'  alt="plus"/>
            </button>
        </div>
    )
}

export default ChangeQuantity;