const { deleteFile } = require('../../utils/deleteFile')
const Films = require('../models/films')

const getFilms = async (req, res, next) => {
  try {
    const film = await Films.find({ verified: true })
    return res.status(200).json(film)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

const getFilmsAdmin = async (req, res, next) => {
  try {
    const film = await Films.find({ verified: false })
    return res.status(200).json(film)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

const getFilmsById = async (req, res, next) => {
  try {
    const { id } = req.params
    const film = await Films.findById(id)
    return res.status(200).json(film)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

const getFilmsByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params
    const film = await Films.find({ genre })
    return res.status(200).json(film)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

const getFilmsByYears = async (req, res, next) => {
  try {
    const { years } = req.params
    const film = await Films.find({ years: { $lte: years } })
    return res.status(200).json(film)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

const postFilms = async (req, res, next) => {
  try {
    if (!req.body.titleFilm) {
      return res.status(400).json({ error: 'THE TITLEFILM FIELD IS REQUIRED.' })
    }
    const newFilm = new Films(req.body)

    if (req.file) {
      newFilm.imagen = req.file.path
    }

    if (req.user.rol === 'admin') {
      newFilm.verified = true
    } else {
      newFilm.verified = false
    }

    const filmSaved = await newFilm.save()

    return res.status(201).json(filmSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putFilms = async (req, res, next) => {
  try {
    const { id } = req.params
    const newFilm = new Films(req.body)
    newFilm._id = id

    if (req.file) {
      newFilm.imagen = req.file.path
      const oldFilm = await Films.findById(id)
      deleteFile(oldFilm.imagen)
    }

    const filmsUpdated = await Films.findByIdAndUpdate(id, newFilm, {
      new: true
    })
    return res.status(200).json(filmsUpdated)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

const deleteFilms = async (req, res, next) => {
  try {
    const { id } = req.params
    const filmsDeleted = await Films.findByIdAndDelete(id)
    deleteFile(filmsDeleted.imagen)
    return res.status(200).json(filmsDeleted)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

module.exports = {
  getFilms,
  getFilmsById,
  getFilmsByGenre,
  getFilmsByYears,
  postFilms,
  putFilms,
  deleteFilms,
  getFilmsAdmin
}
