const { isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/file') // Middleware que permite la reutilización
const {
  getUsers,
  register,
  login,
  deleteUserOrImage
} = require('../controllers/users')

const usersRoutes = require('express').Router()

usersRoutes.get('/', [isAdmin], getUsers)
usersRoutes.post('/register', upload('users').single('imagen'), register) // Usando 'users' como carpeta en Cloudinary
usersRoutes.post('/login', login)
usersRoutes.delete('/:id', [isAdmin], deleteUserOrImage)

module.exports = usersRoutes
