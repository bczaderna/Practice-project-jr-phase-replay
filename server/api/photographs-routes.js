"use strict";

const router = require("express").Router();
const Photographs = require("../db/photographs");
const Artists = require("../db/artists");

router.get("/", async (req, res, next) => {
  try {
    let allPhotographs = await Photographs.findAll();
    res.send(allPhotographs);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let singlePhotograph = await Photographs.findByPk(req.params.id, {
      include: [{ model: Artists }]
    });

    res.send(singlePhotograph);
  } catch (err) {
    next(err);
  }
});

router.post("/form", async (req, res, next) => {
  try {
    console.log(req.body, "req body");
    let newPhotograph = await Photographs.create(req.body);
    console.log(newPhotograph, "new photograph");
    res.json(newPhotograph);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let photographToDelete = await Photographs.findById(req.params.id);

    if (!photographToDelete) {
      const err = new Error("Not found");
      err.status = 404;
      return next(err);
    } else {
      await Photographs.destroy({ where: { id: req.params.id } });

      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let photoToUpdate = await Photographs.findByPk(req.params.id);
    console.log(req.body, "what is req body");
    if (!photoToUpdate) {
      res.sendStatus(404);
    } else {
      const updated = await photoToUpdate.update(req.body);
      

      res.status(200).json(updated);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
