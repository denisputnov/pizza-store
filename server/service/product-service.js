const productModel = require("../models/product-model")
const categoryModel = require("../models/category-model")
const ApiError = require("../exceptions/api-error")

class ProductService {
  async getCategories() {
    const categories = await categoryModel.find({})
    return categories
  }

  async getAllProducts() {
    const products = await productModel.find({})
    return products
  }

  async getProductsByCategory(category) {
    const {_id: cateroryID} = await categoryModel.findOne({url: category})
    const products = await productModel.find({category: cateroryID})
    return products
  }

  async addProduct(productInfo) { 
    const candidate = await productModel.findOne({name: productInfo.name})
    if (candidate) {
      throw ApiError.BadRequest(`Продукт под названием "${product.name}" уже существует`)
    }
    const product = await productModel.create({...productInfo})
    return product
  }

  async addCategory({name, img, url}) {
    const categoryByUrl = await categoryModel.findOne({url})
    const categoryByName = await categoryModel.findOne({name})
    if (categoryByUrl || categoryByName) {
      throw ApiError.BadRequest(`Категория с такими данными уже существует`)
    }
    const category = await categoryModel.create({name, img, url})
    return category
  }
}

module.exports = new ProductService()