const router = require('express').Router();
const directors = require('../controllers/data');

router.get('/titles/:name/directors', directors);

module.exports = router;
