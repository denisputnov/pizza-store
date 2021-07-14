export default class ProductDisplayService {
  static formatIngredients = (ingredients: string) => {
    return ingredients
      .split(',')
      .map((ing: string) => ing.trim())
      .map((ing: string) => ing.charAt(0).toUpperCase() + ing.slice(1))
      .join(', ')
  }

  static calculatePrice = (price: number, currentSize: number, isHalf: boolean) => {
    let currentPrice = 480
    if (currentSize === 41) {
      currentPrice = 640
    }
    return isHalf ? currentPrice / 2 : currentPrice
  }

  static calculateQuantity = (isHalf: boolean, size: number) => {
    let quantity = 900
    if (size === 41) {
      quantity = 1200
    }
    return isHalf ? quantity / 2 : quantity
  }
}