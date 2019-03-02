'use strict'

const router = require('express').Router()
const Photographs = require('../db/photographs')

router.get('/', async (req, res, next) => {
  try {
    let allPhotographs = await Photographs.findAll();
    res.send(allPhotographs);
  } catch (err) {
    next(err);
  }
})

module.exports = router