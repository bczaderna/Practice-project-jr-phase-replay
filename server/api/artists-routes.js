"use strict";

const router = require("express").Router();
const Artists = require("../db/artists");
const Photographs = require("../db/photographs");

router.get("/", async (req, res, next) => {
  try {
    let allArtists = await Artists.findAll();
    res.send(allArtists);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let singleArtist = await Artists.findByPk(req.params.id, {
      include: [{ model: Photographs }]
    });
    res.send(singleArtist);
  } catch (err) {
    next(err);
  }
});

router.post("/form", async (req, res, next) => {
  try {
    let newArtist = await Artists.create(req.body);

    res.json(newArtist);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let artistToDelete = await Artists.findById(req.params.id);

    if (!artistToDelete) {
      const err = new Error("Not found");
      err.status = 404;
      return next(err);
    } else {
      await Artists.destroy({ where: { id: req.params.id } });

      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let artistToUpdate = await Artists.findByPk(req.params.id);

    if (!artistToUpdate) {
      res.sendStatus(404);
    } else {
      const updated = await artistToUpdate.update(req.body);

      res.status(200).json(updated);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
