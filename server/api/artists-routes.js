'use strict'

const router = require('express').Router()
const Artists = require('../db/artists')
const Photographs = require('../db/photographs')


router.get('/', async (req, res, next) => {
   try {
    let allArtists = await Artists.findAll();
    res.send(allArtists);
   } catch (err) {
     next(err);
   }
})

router.get('/:id', async (req, res, next) => {
  try {
    let singleArtist = await Artists.findById(req.params.id, {
      include: [{model: Photographs}]
    });
    res.send(singleArtist);
  } catch (err) {
    next(err);
  }
})


module.exports = router
