const express = require('express')
const items = require('./controller')
const router = express.Router()

router.get('/items', items.index) // get all posts
router.post('/items', items.create)


module.exports = router;
