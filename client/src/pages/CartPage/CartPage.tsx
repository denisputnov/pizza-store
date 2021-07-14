import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import ContentContainer from '../../hoc/ContentContainer/ContentContainer'
import { observer } from 'mobx-react-lite'
import cart from '../../store/cart'
import classes from './CartPage.module.css'
import MakeOrder from './MakeOrder/MakeOrder'

const CartPage = observer(() => {
  return (
    <ContentContainer>
      <div className={classes.CartContent}>
        {cart.cart.length 
          ? cart.cart.map(product => <CartItem key={product._id} {...product} />)
          : <h1 className={classes.EmptyTitle}>Корзина пуста</h1>}
        {!!cart.cart.length && <MakeOrder />}
      </div>
    </ContentContainer>
  )
})

export default CartPage
