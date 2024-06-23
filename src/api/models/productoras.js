const mongoose = require('mongoose')

const productorasSchema = new mongoose.Schema(
  {
    nameProductora: { type: String, required: true },
    imagen: { type: String, required: true },
    pelis: [{ type: mongoose.Types.ObjectId, ref: 'pelis', required: false }]
  },
  {
    timestamps: true,
    collection: 'productoras'
  }
)

const Productora = mongoose.model(
  'productoras',
  productorasSchema,
  'productoras'
)
module.exports = Productora
