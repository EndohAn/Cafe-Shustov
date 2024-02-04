import data from '../Data/data'
import Card from './Card'
import {  useSelector } from "react-redux";
import {  getSelectedCategory } from "../../Redux/menuSlice";

const Cards = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div className="product">
            {data.filter(good => {                
                return selectedCategory === good.category           
            } ).map ((good) =><Card key={good.id} good={good} />) }
            
        
      </div> 
    )
}


export default Cards
