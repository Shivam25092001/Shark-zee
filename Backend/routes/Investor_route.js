const express = require('express');
const { createInvestor, loginInvestor, getAllInvestors, updateInvestor, deleteInvestor, getInvestor, logoutInvestor } = require('../controllers/investorController');
const {isAuthencatedInvestor} = require('../middleware/auth')
const router = express.Router();

router.route('/investor/new').post(createInvestor)
router.route('/investor/login').post(loginInvestor)
router.route('/investors').get(getAllInvestors)
router.route('/investor/:id').put(updateInvestor)
router.route('/investor/:id').delete(deleteInvestor)
router.route('/investor/logout').get(isAuthencatedInvestor, logoutInvestor)
router.route('/investor/:id').get(getInvestor)


module.exports = router