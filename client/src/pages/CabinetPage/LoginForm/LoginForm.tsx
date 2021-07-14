import React, { useState } from 'react'

import AuthStore from '../../../store/auth'
import { observer } from 'mobx-react-lite'

import classes from './LoginForm.module.css'
import AuthDisplayService from '../../../services/authDisplayService'


function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const isFormValid = AuthDisplayService.validateEmail(email) && AuthDisplayService.validatePassword(password)

  const handleEmailChange = (e: any) => {
    const value = e.target.value
    setEmail(value)
    AuthStore.setErrorMessage('')
    if (!AuthDisplayService.validateEmail(value) && value.length) {
      e.target.classList.add(classes.Invalid)
    } else {
      e.target.classList.remove(classes.Invalid)
    }
  } 

  const handlePasswordChange = (e: any ) => {
    const value = e.target.value
    setPassword(value)
    AuthStore.setErrorMessage('')
    if (!AuthDisplayService.validatePassword(value) && value.length) {
      e.target.classList.add(classes.Invalid)
    } else {
      e.target.classList.remove(classes.Invalid)
    }
  }
  
  return (
    <div className={classes.LoginForm}>
      <p 
        className={[classes.Error, !!AuthStore.errorMessage ? classes.ActiveError : ''].join(' ')}
      >
        {AuthStore.errorMessage}
      </p>

      <input 
        type="text" 
        placeholder="Email" 
        value={email} 
        onChange={handleEmailChange}
      />
      <mark>Некорректный Email</mark>

      <input 
        type="password" 
        placeholder="Пароль" 
        value={password} 
        onChange={handlePasswordChange}
      />
      <mark>{password.length <= 32 ? 'Минимальная длина пароля: 6 символов' : 'Максимальная длина пароля: 32 символа'}</mark>

      <div className={classes.Controls}>
        <button 
          disabled={!isFormValid}
          onClick={() => AuthStore.login(email, password)}
        >
          Логин
        </button>
        <button 
          disabled={!isFormValid} 
          onClick={() => AuthStore.registration(email, password)}
        >
          Регистрация
        </button>
      </div>
    </div>
  )
}

export default observer(LoginForm)