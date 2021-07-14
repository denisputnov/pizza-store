export interface ICartProduct {
  _cartHash: string
  _id: string
  name: string
  img: string
  count: number
  ingredients: string | null
  size: number
  isHalf: boolean
  price: number
  packagePrice: number
  quantity?: number | null
  quantityUnit: string
  showAdditional: boolean
}
