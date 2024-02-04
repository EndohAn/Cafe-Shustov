import React from 'react'
import './NewsLetter.css'
const NewsLetter = ()=>{
    return(
        <div className='newsletter'>
        <p>Получай выгодные предложения на свой  Email</p>
        <span>Подписывайтесь на наши новости </span>
        <div>
          <input type="email" placeholder='Ваш   Email ' />
          <button>Подписаться</button>
        </div>
      </div>
    )
}
export default NewsLetter