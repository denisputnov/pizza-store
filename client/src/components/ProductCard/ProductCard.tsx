import React, { useState } from 'react'
import { IProduct } from '../../types/response/IProduct'
import Controls from './Controls/Controls'
import classes from './ProductCard.module.css'
import ProductDisplayService from '../../services/ProductDisplayService'
import cart from '../../store/cart'

function ProductCard(
    { _id, name, img, price, quantity, 
      quantityUnit, ingredients, 
      isAvaliable, options, packagePrice}: IProduct
  ) {

  const MIN_SIZE = 35
  const MAX_SIZE = 41

  const [currentSize, setCurrentSize] = useState(MIN_SIZE)
  const [isHalf, setIsHalf] = useState(false)

  const changeSize = (e: any) => setCurrentSize(Number(e.target.value))
  const changeIsHalf = () => setIsHalf(!isHalf)

  const addProductToCart = () => {
    cart.add({
      _cartHash: `${_id}-${name}-${currentSize}-${isHalf}`,
      _id,
      name, 
      img, 
      count: 1,
      ingredients,
      size: currentSize,
      isHalf,
      price,
      packagePrice,
      quantity,
      quantityUnit,
      showAdditional: options
    })
  }  

  return (
    <div className={classes.ProductCard}>
      <div className={classes.ProductImageWrapper}>
        <img src={img} alt={name} />
      </div>
      <div className={classes.ProductInfo}>
        <div>
          <div className={classes.ProductNameAndPrice}>
            <span>{name}</span>
            <span>
              {options && ProductDisplayService.calculatePrice(price, currentSize, isHalf)}
              {!options && price}
              р
            </span>
          </div>
          {ingredients && <p className={classes.ProductIngredients}>{ProductDisplayService.formatIngredients(ingredients)}</p>}
        </div>
        {options && 
          <div className={classes.ProductControlsWrapper}>
            <Controls 
              itemID={_id} 
              minValue={MIN_SIZE} 
              maxValue={MAX_SIZE} 
              onChange={changeSize} 
              name="size" 
              units="см"
              secondDefaultChecked={false}
            />
            <Controls 
              itemID={_id} 
              minValue="Половина" 
              maxValue="Целая"
              onChange={changeIsHalf} 
              name="weight" 
              units=""
              secondDefaultChecked={true}
            />
          </div>}
          <button 
            className={classes.AddToCartButton} 
            disabled={!isAvaliable} 
            onClick={addProductToCart}
          >
            В корзину
          </button>
      </div>
    </div>
  )
}

export default ProductCard