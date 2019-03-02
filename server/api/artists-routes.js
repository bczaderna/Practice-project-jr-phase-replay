'use strict'

const router = require('express').Router()
const Artists = require('../db/artists')


router.get('/', async (req, res, next) => {
   try {
    let allArtists = await Artists.findAll();
    res.send(allArtists);
   } catch (err) {
     next(err);
   }
})

module.exports = router