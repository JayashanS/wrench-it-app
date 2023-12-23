const express = require('express')
const {createGarage} = require ('../controllers/garageController')
const router = express.Router()


router.post('/', createGarage)

module.exports = router