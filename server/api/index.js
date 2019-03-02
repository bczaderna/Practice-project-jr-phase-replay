'use strict'

const router = require('express').Router()



router.use('/artists', require('./artists-routes'))
router.use('/photographs', require('./photographs-routes'))


router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
  })

 

module.exports = router