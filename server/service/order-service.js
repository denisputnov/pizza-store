const orderModel = require('../models/order-model')

class OrderService {
  async createNewOrder({name, address, phone, commentary, order}) {
    const newOrder = await orderModel.create({ name, address, phone, commentary, order })
    return newOrder
  }

  async getAllOrders() {
    const orders = await orderModel.find({})
    return orders
  }

  async closeOrder(id) {
    const order = await orderModel.findById(id)
    order.closed = true
    await order.save()
    return order
  }
  
  async getOpenedOrders() {
    const orders = await orderModel.find({ closed: false })
    return orders
  }

  async getClosedOrders() {
    const orders = await orderModel.find({ closed: true })
    return orders
  }
}

module.exports = new OrderService()