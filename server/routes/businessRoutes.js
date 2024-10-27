// routes/businessRoutes.js
const express = require('express');
const router = express.Router();
const { getBusinesses } = require('../controllers/businessController');

router.get('/', getBusinesses);

module.exports = router;
