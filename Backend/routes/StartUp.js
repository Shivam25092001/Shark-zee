const express = require('express');
const { getAllStartUps,createStartup, updateStartup, deleteStartup,getStartup, loginstartup, logoutStartup } = require('../controllers/startupController');
const { isAuthencatedStartup } = require('../middleware/auth');
const router = express.Router();

router.route('/startups').get(getAllStartUps)

router.route('/startup/new').post(createStartup)

router.route('/startup/:id').put(isAuthencatedStartup,updateStartup)

router.route('/startup/:id').delete(isAuthencatedStartup,deleteStartup)

router.route('/startup/logout').get(isAuthencatedStartup,logoutStartup)

router.route('/startup/:id').get(getStartup)

router.route('/startup/login').post(loginstartup)


module.exports = router