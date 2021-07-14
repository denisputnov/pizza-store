export interface IProduct {
  _id: string
  category: string
  img: string
  name: string
  price: number
  packagePrice: number
  quantity: number | null
  quantityUnit: string
  ingredients: string | null
  isAvaliable: boolean
  options: boolean
}