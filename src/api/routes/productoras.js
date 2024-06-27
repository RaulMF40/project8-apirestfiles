const { isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const {
  getProductorasById,
  getProductoras,
  postProductoras,
  putProductoras,
  deleteProductoras
} = require('../controllers/productoras')

const productorasRouter = require('express').Router()

productorasRouter.get('/:id', getProductorasById)
productorasRouter.get('/', getProductoras)
productorasRouter.post(
  '/',
  [isAdmin],
  upload('productoras').single('imagen'),
  postProductoras
) // Usando 'productoras' como carpeta en Cloudinary
productorasRouter.put(
  '/:id',
  [isAdmin],
  upload('productoras').single('imagen'),
  putProductoras
) // Usando 'productoras' como carpeta en Cloudinary
productorasRouter.delete('/:id', [isAdmin], deleteProductoras)

module.exports = productorasRouter
