const ContCrl = require('../controllers/ContentCourse.controller')
const router = require('express').Router()

router.get('',ContCrl.GetAllContentCourse)
router.get('/:id',ContCrl.GetIdContentCourse)

module.exports = router;