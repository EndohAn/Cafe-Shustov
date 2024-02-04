
import React from 'react'
import './AllMenu.css'
import AllCategories from '../Filter/AllCategories'
import Cards from '../Card/Cards'


 const AllMenu = () => {
    return(
        
                            
      <section className='menu'>
         <div className='all-menu_title'>
              <h1>Наше меню</h1>
            </div> 
            <div >
            <AllCategories/> 
            <Cards/>
            </div>




        </section>
        
    )


    }

 export default AllMenu