const express = require('express');
const { createInvestor, loginInvestor, getAllInvestors, updateInvestor, deleteInvestor, getInvestor } = require('../controllers/investorController');
const router = express.Router();

router.route('/investor/new').post(createInvestor)


router.route('/investor/login').post(loginInvestor)


router.route('/investors').get(getAllInvestors)


router.route('/investor/:id').put(updateInvestor)


router.route('/investor/:id').delete(deleteInvestor)


router.route('/investor/:id').get(getInvestor)


module.exports = router