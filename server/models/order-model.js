const {Schema, model} = require('mongoose')

const OrderSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  commentary: { type: String, default: '' },
  phone: { type: String, required: true },
  order: { type: String, required: true },
  date: { type: Number, default: Date.now() },
  closed: { type: Boolean, default: false }
})

module.exports = model('Order', OrderSchema)