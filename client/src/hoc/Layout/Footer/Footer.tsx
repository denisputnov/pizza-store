import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Footer.module.css'

function Footer() {

  const getFooterLeading = () => {
    const today = new Date()
    return `BRISCOLA © 2019-${today.getFullYear()}`
  }

  return (
    <footer className={classes.Footer}>
      <span>{getFooterLeading()}</span>
      <Link to='/terms'>Правила</Link>
      <Link to='/privacy'>Приватность</Link>
    </footer>
  )
}

export default Footer
