const { isAuth, isAdmin } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const {
  getFilmsAdmin,
  getFilmsByYears,
  getFilmsByGenre,
  getFilmsById,
  getFilms,
  postFilms,
  putFilms,
  deleteFilms
} = require('../controllers/films')

const filmsRouter = require('express').Router()

filmsRouter.get('/not-verified', [isAdmin], getFilmsAdmin)
filmsRouter.get('/years/:year', getFilmsByYears)
filmsRouter.get('/genre/:genre', getFilmsByGenre)
filmsRouter.get('/:id', getFilmsById)
filmsRouter.get('/', getFilms)
filmsRouter.post('/', [isAuth], upload.single('imagen'), postFilms)
filmsRouter.put('/:id', [isAdmin], upload.single('imagen'), putFilms)
filmsRouter.delete('/:id', [isAdmin], deleteFilms)

module.exports = filmsRouter
