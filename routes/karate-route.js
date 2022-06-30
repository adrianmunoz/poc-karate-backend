const { Router } = require('express');
const { check } = require('express-validator');
const { karatePocCaso1 } = require('../controllers/karate-poc');

const router = Router();

router.get('/karate/caso1', karatePocCaso1);

module.exports = router;
