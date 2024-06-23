const mongoose = require('mongoose')

const pelisSchema = new mongoose.Schema(
  {
    titleFilm: { type: String, required: true },
    imagen: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    genre: {
      type: String,
      required: true,
      enum: [
        'suspense',
        'acción',
        'aventuras',
        'terror',
        'musical',
        'ciencia ficción',
        'comedia',
        'belicas',
        'animación',
        'fantasía'
      ]
    },
    verified: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    collection: 'pelis'
  }
)

const Films = mongoose.model('pelis', pelisSchema, 'pelis')
module.exports = Films
