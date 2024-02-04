import'./AllCategories.css'
import Filter from './Filter'
import { useState } from "react";



const AllCategories = () => {

    const [showCategories, setShowCategories] = useState(false)

    return (
         <div className="menu-box" >             
            <button className="filter-btn-mobile" 
            onClick={ () => setShowCategories(!showCategories)}>НАЙТИ</button>
            <div className={showCategories ? "categories-box-mobile" : " categories-box box-categories"}
            onClick={ () => setShowCategories(false)}>
                 {["Сэты на одного", "Супер сэты","Шашлык из шеи",  "Шашлык из ребер","Шашлык из куриного филе","Шашлык из куриной голени"].map((category,index) => <Filter key={index}category={category} /> )}   
           
        </div>
        </div>        
    )
}


export default AllCategories