const ApiError = require("../exceptions/api-error")
const productService = require("../service/product-service")

class ProductController {
  async getCategories(req, res, next) {
    try {
      const categories = await productService.getCategories()
      if (!categories) {
        next(ApiError.BadRequest('Категории не найдены'))
      }
      return res.status(200).json(categories)
    } catch (e) {
      next(e)
    }
  }

  async getProducts(req, res, next) {
    try {
      const category = req.params.category
      if (!category) {
        const products = await productService.getAllProducts()
        return res.status(200).json(products)
      }
      const products = await productService.getProductsByCategory(category)
      return res.status(200).json(products)
    } catch (e) {
      next(e)
    }
  }

  async addProduct(req, res, next) {
    try {
      const { 
        category,
        img,
        name,
        price,
        packagePrice,
        quantity,
        quantityUnit,
        ingredients,
        isAvaliable,
        options
      } = req.body
      if (!category || !img || !name || !price) {
        next(ApiError.BadRequest('Указаны не все обязательные параметры для добавления товара'))
      }
      const product = await productService.addProduct({category, img, name, price, packagePrice, quantity, quantityUnit, ingredients, isAvaliable, options})
      return res.status(201).json(product)
    } catch (e) {
      next(e)
    }
  }

  async addCategory(req, res, next) {
    try {
      const { name, img, url } = req.body
      const category = await productService.addCategory({name, img, url})
      return res.status(201).json(category)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new ProductController()