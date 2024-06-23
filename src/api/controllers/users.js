const { generateSign } = require('../../config/jwt')
const { buscarUsuario } = require('../../utils/buscarUsuario')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const register = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'NO IMAGE WAS PROVIDED' })
    }
    const newUser = new User({
      userName: req.body.userName,
      imagen: req.file.path,
      password: req.body.password,
      rol: 'user'
    })

    const duplicateUser = await buscarUsuario(req.body.userName)

    if (duplicateUser) {
      return res.status(400).json('CHANGE USERNAME')
    }

    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = await buscarUsuario(req.body.userName)

    if (!user) {
      return res.status(400).json('NOT USERS REAL')
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('BAD PASSWORD')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteUserOrImage = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDeleted = await User.findByIdAndDelete(id)

    if (!userDeleted) {
      return res.status(404).json({ error: 'USER NOT FOUND' })
    }

    if (userDeleted.imagen) {
      deleteFile(userDeleted.imagen)
    }

    return res.status(200).json(userDeleted)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

module.exports = { getUsers, register, login, deleteUserOrImage }
