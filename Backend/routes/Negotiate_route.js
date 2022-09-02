const express = require('express');
const { startNegotiation, updateNegotiate } = require('../controllers/negotiateController');
const router = express.Router();

router.route('/negotiate/new/:id').post(startNegotiation);
router.route('/negotiate/update').put(updateNegotiate);

module.exports = router;