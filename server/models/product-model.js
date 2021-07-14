const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
  category:     { type: Schema.Types.ObjectId,  required: true, ref: "Category" },
  img:          { type: String,                 required: true },
  name:         { type: String,                 required: true, dropDups: true, unique: true },
  price:        { type: Number,                 required: true },
  
  packagePrice: { type: Number,   default: 0      },
  quantity:     { type: Number,   default: null   },
  quantityUnit: { type: String,   default: "г"    },
  ingredients:  { type: String,   default: null   },
  isAvaliable:  { type: Boolean,  default: true   },
  options:      { type: Boolean,  defalut: false  }
})

module.exports = model('Product', ProductSchema)