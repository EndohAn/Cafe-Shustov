import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Войти</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Ваше имя' />
          <input type="email" placeholder='Email адрес' />
          <input type="password" placeholder='пароль' />
        </div>
        <button>Войти</button>
        <p className="loginsignup-login">Уже есть аккаунт? <span>Логин здесь</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Нажимая продолжить ,я соглашаюсь с правилами и политикой конфиденциальности.</p>
        </div>
      </div>
    </div>
  )
}

export default Login