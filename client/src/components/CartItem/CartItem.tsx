import React from 'react'
import ProductDisplayService from '../../services/ProductDisplayService'

import { ICartProduct } from '../../types/store/ICartProduct'

import { observer } from 'mobx-react-lite'
import cart from '../../store/cart'

import classes from './CartItem.module.css'

const CartItem = observer(({ 
  _cartHash, _id, name, img, packagePrice, 
  count, ingredients, showAdditional, 
  size, isHalf, price, quantity, quantityUnit }: ICartProduct) => {

  return (
    <div className={classes.CartItem}>
      <div className={classes.ImageWrapper}>
        <img src={img} alt={name} />
      </div>
      <div className={classes.CartContent}>
        <div className={classes.NameAndPrice}>
          <h4 className={classes.Name}>{name}</h4>
          <span className={classes.Price}>
            {showAdditional 
              ? ProductDisplayService.calculatePrice(price, size, isHalf) * count 
              : !showAdditional && price * count
            }
            &nbsp;руб.
          </span>
        </div>
        <p className={classes.Properties}>
          <span>
            {showAdditional 
              ? [`${ProductDisplayService.calculateQuantity(isHalf, size)}${quantityUnit}`, `${size}см`, isHalf ? "половина" : "целая"].join(', ')
              : `${quantity}${quantityUnit}`
            }
          </span>
          {packagePrice && <span className={classes.PackagePrice}>+ {packagePrice * count} руб. упаковка</span>}
        </p>
        {ingredients && <p className={classes.Ingredients}>{ProductDisplayService.formatIngredients(ingredients)}</p>}
        <div className={classes.Controls}>
          <button className={classes.Decrement} onClick={() => cart.decrement(_cartHash)}/>
          <span className={classes.Count}>{count}</span>
          <button className={classes.Increment} onClick={() => cart.increment(_cartHash)}/>
          <button className={classes.Remove} onClick={() => cart.remove(_cartHash)}/>
        </div>
      </div>
    </div>
  )
}) 

export default CartItem
