import React from 'react'
import AuthStore from '../../../store/auth'
import classes from './CabinetContent.module.css'

function CabinetContent() {
  return (
    <div className={classes.CabinetContent}>
      <h1>Личный кабинет</h1> 
      <div className={classes.UserInfo}>
        <p>Ваш email: {AuthStore.user.email}</p>
      </div>
      <button 
        className={classes.Exit} 
        onClick={() => AuthStore.logout()}
      >
        Выйти
      </button>
    </div>
  )
}

export default CabinetContent