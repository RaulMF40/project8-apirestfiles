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
productorasRouter.post('/', [isAdmin], upload.single('imagen'), postProductoras)
productorasRouter.put(
  '/:id',
  [isAdmin],
  upload.single('imagen'),
  putProductoras
)
productorasRouter.delete('/:id', [isAdmin], deleteProductoras)

module.exports = productorasRouter
