const router = require('express').Router();
const Main = require('../controllers/mainMenu.controller')

router.get('/',Main.GetMenu)

module.exports = router