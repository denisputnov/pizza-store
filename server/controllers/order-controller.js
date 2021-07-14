const orderService = require("../service/order-service")

class OrderController {
  async makeOrder(req, res, next) {
    try {
      const {name, address, commentary, phone, order} = req.body
      const createdOrder = await orderService.createNewOrder({name, address, commentary, phone, order: JSON.stringify(order)})
      res.status(201).json(createdOrder)
    } catch(e) {
      next(e)
    }
  }

  async getAllOrders(req, res, next) {
    try {
      const orders = await orderService.getAllOrders()
      res.status(200).json(orders)
    } catch(e) {
      next(e)
    }
  }

  async getOpenedOrders(req, res, next) {
    try {
      const orders = await orderService.getOpenedOrders()
      res.status(200).json(orders)
    } catch(e) {
      next(e)
    }
  }

  async getClosedOrders(req, res, next) {
    try {
      const orders = await orderService.getClosedOrders()
      res.status(200).json(orders)
    } catch(e) {
      next(e)
    }
  }

  async closeOrder(req, res, next) {
    try {
      const { _id } = req.body
      const closedOrder = await orderService.closeOrder(_id)
      res.status(200).json(closedOrder)
    } catch(e) {
      next(e)
    }
  }
}

module.exports = new OrderController()