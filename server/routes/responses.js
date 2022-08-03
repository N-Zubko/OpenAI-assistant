const express = require("express");
const router = express.Router();
const responses = require("../services/responses");

/* GET  */
router.get("/", function (req, res, next) {
  try {
    res.json(responses.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting AI responses `, err.message);
    next(err);
  }
});

/* POST  */
router.post("/", async function (req, res, next) {
  try {
    res.json(await responses.create(req.body));
  } catch (err) {
    console.error(`Error while adding responses `, err.message);
    next(err);
  }
});

module.exports = router;
