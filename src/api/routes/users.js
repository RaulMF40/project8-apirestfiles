const { isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const {
  getUsers,
  register,
  login,
  deleteUserOrImage
} = require('../controllers/users')

const usersRoutes = require('express').Router()

usersRoutes.get('/', [isAdmin], getUsers)
usersRoutes.post('/register', upload.single('imagen'), register)
usersRoutes.post('/login', login)
usersRoutes.delete('/:id', [isAdmin], deleteUserOrImage)

module.exports = usersRoutes
