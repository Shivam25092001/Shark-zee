const express = require('express');
const { startNegotiation, updateNegotiate } = require('../controllers/negotiateController');
const {isAuthencatedInvestor} = require('../middleware/auth')
const router = express.Router();

router.route('/negotiate/new/:id').post(isAuthencatedInvestor, startNegotiation);
router.route('/negotiate/update').put(updateNegotiate);

module.exports = router;