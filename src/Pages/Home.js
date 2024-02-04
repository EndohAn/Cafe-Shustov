import React from 'react'
import PromoBox from '../Components/PromoBox/PromoBox'
// import AllMenu from '../Components/AllMenu/AllMenu'
import Slider from '../Components/SLider/Slider'
import Benefits from '../Components/Benefits/Benefits'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <div>
      <PromoBox/> 
      </div>      
      <Slider/>
      <div>
      <Benefits/>
      </div>
      <div>
      <NewsLetter/>
       </div>    
    </div>
  )
}

export default Home
