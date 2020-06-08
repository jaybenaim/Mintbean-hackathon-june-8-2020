const express = require("express");
const router = express.Router();
const Palette = require("../../models/Palette");
const User = require("../../models/User");

router.post("/", (req, res) => {
  const { palette, user } = req.body;
  let newPalette = new Palette({ ...palette, user });
  newPalette
    .save()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send(err));
});

router.get("/", (req, res) => {
  const { userId } = req.query;
  Palette.find({ user: userId })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
