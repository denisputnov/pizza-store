import React from 'react'
import { observer } from 'mobx-react-lite'
import cart from '../../../store/cart'
import classes from './MakeOrder.module.css'
import { useHistory } from 'react-router-dom'

const MakeOrder = observer(() =>  {
  const history = useHistory()
  return (
    <>
      <div className={classes.MakeOrder}>
        <p className={classes.Summary}>Итого: {cart.sum} руб.</p>
        <div className={classes.ButtonsWrapper}>
          <button onClick={() => history.push('/order')}>Оформить доставку</button>
          <button onClick={() => history.push('/order?mode=pickup')}>Оформить самовывоз</button>
        </div>
      </div>
      <p className={classes.Attention}>
        <span>Внимание!</span>&nbsp; 
        Заказ оформленный после 22:00 обрабатывается и доставляется на следующий день!
      </p>
    </>
  )
})

export default MakeOrder
