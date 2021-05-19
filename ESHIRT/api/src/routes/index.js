const { Router } = require('express');

const category = require('./category')
const details = require('./details')
const order = require('./order')
const shirt = require('./shirt')
const user = require('./user')
const payment = require('./payment')

const router = Router();

router.use('/category', category)
router.use('/details', details)
router.use('/order', order)
router.use('/shirt', shirt)
router.use('/user', user)
router.use('/payment', payment)

module.exports = router;
