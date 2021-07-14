import React, { useEffect, useState } from 'react'
import classes from './InfoMessage.module.css'

function InfoMessage({text, delay = 8000} : {text: string, delay?: number}) {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 200);
    setTimeout(() => {
      setShow(false)
    }, delay);
  }, [delay])

  return (
    <div className={[classes.InfoMessage, show ? classes.InfoMessageActive : ''].join(' ')}>
      <p>{text}</p>
    </div>
  )
}

export default InfoMessage
