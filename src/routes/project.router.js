const router = require('express').Router();
const Project = require('../controllers/Project.controller')

//aca van los metodos get,post,put,delete
router.get('/',Project)

module.exports = router