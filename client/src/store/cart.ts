import { makeAutoObservable } from 'mobx'
import { ICartProduct } from '../types/store/ICartProduct'
import ProductDisplayService from '../services/ProductDisplayService'

class Cart {
  cart: ICartProduct[] = []
  
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
    makeAutoObservable(this)
  }

  get sum() {
    
    return  this.cart.reduce((acc, cur) => {
      return cur.showAdditional 
        ? acc + (ProductDisplayService.calculatePrice(cur.packagePrice, cur.size, cur.isHalf) + cur.packagePrice) * cur.count
        : acc + (cur.price + cur.packagePrice) * cur.count
    }, 0)
  }

  get summary() {
    return this.cart.map((product:ICartProduct) => Object.assign({}, product))
  }

  save() {
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  add(product: ICartProduct) {
    const isProductAlreadyInCart = !!this.cart.find(item => item._cartHash === product._cartHash)
    if (isProductAlreadyInCart) return this.increment(product._cartHash)
    this.cart.push(product)
    this.log()
    this.save()
  }

  remove(hash: string) {
    this.cart = this.cart.filter(cartProduct => cartProduct._cartHash !== hash)
    this.log()
    this.save()
  }

  increment(hash: string) {
    this.cart.forEach(cartProduct => {
      if (cartProduct._cartHash === hash) cartProduct.count += 1
    })
    this.log()
    this.save()
  }

  decrement(hash: string) {
    this.cart.forEach(cartProduct => {
      if (cartProduct._cartHash === hash) cartProduct.count -= 1
      if (cartProduct.count === 0) this.remove(hash)
    })
    this.log()
    this.save()
  }

  log() {
    console.table(this.cart.map((product:ICartProduct) => Object.assign({}, product)));
  }
}

export default new Cart()