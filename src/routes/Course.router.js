const CourCrl = require('../controllers/Course.Controller')
const router = require('express').Router()
const ValidatorCourse = require('../validators/Course.validators')
const AuthCourse = require('../middlewares/course.auth')

router.get('/',CourCrl.GetCourseAll)
router.get('/:id',CourCrl.GetCourseElement)
router.post('/add',CourCrl.AddCourse)

module.exports = router;