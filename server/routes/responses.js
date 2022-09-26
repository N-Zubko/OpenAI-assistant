const express = require('express');
const router = express.Router();
const routes = require('../services/responses');

// /* GET  */
router.get('/', async function (req, res, next) {
  try {
    routes.getMultiple().then((result) => res.send(result));
  } catch (err) {
    console.error(`Error while getting AI responses `, err.message);
    next(err);
  }
});

/* POST  */
router.post('/', async function (req, res, next) {
  try {
    res.json(await routes.create(req.body));
  } catch (err) {
    console.error(`Error while adding responses `, err.message);
    next(err);
  }
});

module.exports = router;
