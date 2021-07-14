import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.Header}>
      <nav className={classes.NavBar}>
        <NavLink to="/" className={classes.Logo} />

        <NavLink 
          to='/menu' 
          className={[classes.Link, classes.LinkMenu].join(' ')}
          activeClassName={classes.LinkActive}
        >Блюда</NavLink>

        <NavLink 
          to='/cart' 
          className={[classes.Link, classes.LinkCart].join(' ')} 
          activeClassName={classes.LinkActive}
        >Корзина</NavLink>

        <NavLink 
          to='/my' 
          className={[classes.Link, classes.LinkLogin].join(' ')} 
          activeClassName={classes.LinkActive}
        >Кабинет</NavLink>

        <NavLink 
          to='/help' 
          className={[classes.Link, classes.LinkHelp].join(' ')} 
          activeClassName={classes.LinkActive}
        >Помощь</NavLink>

        <a href="tel:+79198209090" className={[classes.Link, classes.LinkPhone].join(' ')} >8-919-820-90-90</a>
      </nav>
    </header>
  )
}

export default Header
