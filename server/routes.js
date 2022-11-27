const express = require('express')

const controller = require('./controller')

const router = express.Router()

router.post('/register', controller.createUser)
router.post('/login', controller.getUser)

module.exports = router