const { deleteFile } = require('../../utils/deleteFile')
const Productora = require('../models/productoras')

const getProductoras = async (req, res, next) => {
  try {
    const productoras = await Productora.find().populate('pelis')
    return res.status(200).json(productoras)
  } catch (error) {
    console.log(error)

    return res.status(400).json('ERROR')
  }
}

const getProductorasById = async (req, res, next) => {
  try {
    const { id } = req.params
    const productoras = await Productora.findById(id).populate('pelis')
    return res.status(200).json(productoras)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

const postProductoras = async (req, res, next) => {
  try {
    const newProductoras = new Productora(req.body)
    if (req.file) {
      newProductoras.imagen = req.file.path
    }
    const productorasSaved = await newProductoras.save()
    return res.status(201).json(productorasSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putProductoras = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldProductoras = await Productora.findById(id)
    const newProductoras = new Productora(req.body)
    newProductoras._id = id
    const pelis = req.body.pelis || []
    newProductoras.pelis = [...oldProductoras.pelis, ...pelis]

    if (req.file) {
      newProductoras.imagen = req.file.path
      deleteFile(oldProductoras.imagen)
    }

    const productorasUpdated = await Productora.findByIdAndUpdate(
      id,
      newProductoras,
      {
        new: true
      }
    )
    return res.status(200).json(productorasUpdated)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

const deleteProductoras = async (req, res, next) => {
  try {
    const { id } = req.params
    const productorasDeleted = await Productora.findByIdAndDelete(id)
    deleteFile(productorasDeleted.imagen)
    return res.status(200).json(productorasDeleted)
  } catch (error) {
    return res.status(400).json('ERROR')
  }
}

module.exports = {
  getProductoras,
  getProductorasById,
  postProductoras,
  putProductoras,
  deleteProductoras
}
