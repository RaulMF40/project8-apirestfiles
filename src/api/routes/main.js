const filmsRouter = require('./films')
const productorasRouter = require('./productoras')
const usersRoutes = require('./users')
const mainRouter = require('express').Router()

mainRouter.use('/productoras', productorasRouter)
mainRouter.use('/films', filmsRouter)
mainRouter.use('/users', usersRoutes)

module.exports = mainRouter
