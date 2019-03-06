'use strict'

const router = require('express').Router()
const Photographs = require('../db/photographs')
const Artists = require('../db/artists')

router.get('/', async (req, res, next) => {
  try {
    let allPhotographs = await Photographs.findAll();
    res.send(allPhotographs);
  } catch (err) {
    next(err);
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    
    let singlePhotograph = await Photographs.findById(req.params.id);
    
    res.send(singlePhotograph);
    
  } catch (err) {
    next(err);
  }
})

// router.get('/:id', async (req, res, next) => {
//   try {
//     let singlePhotograph = await Photographs.findById(req.params.id);
    
//     if (singlePhotograph) {
//       const singlePhotographAndArtists = await Photographs.findAll({
//         where: {id: req.param.id},
//         include: [{model: Artists}]
//       })
//       res.send(singlePhotographAndArtists);
//     }
    
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router
