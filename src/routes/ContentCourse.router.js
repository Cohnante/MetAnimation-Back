const ContCrl = require('../controllers/ContentCourse.controller')
const router = require('express').Router()

router.get('/all', ContCrl.GetAllContentCourse);
router.get('/details/:id', ContCrl.GetIdDetailsCourse);
router.get('/content/:id', ContCrl.GetIdContentCourse);
router.get('/files/:id', ContCrl.GetIdFilesCourse);
router.get('/links/:id', ContCrl.GetIdLinksCourse);
router.get('/coments/:id', ContCrl.GetComentsCourse);


module.exports = router;