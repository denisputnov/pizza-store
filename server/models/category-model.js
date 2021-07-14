const {Schema, model} = require('mongoose')

const CategorySchema = new Schema({
  name: { type: String, required: true },
  img:  { type: String, required: true },
  url:  { type: String, required: true }
})

module.exports = model('Category', CategorySchema)