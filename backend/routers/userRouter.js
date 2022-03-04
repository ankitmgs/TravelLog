const Model = require("../models/userModel");
const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
  new Model(req.body)
    .save()
    .then(() => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      err.status(500).json(err);
    });
});

module.exports = router;