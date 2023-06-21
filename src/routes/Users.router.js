const router = require('express').Router()
const ProCtrl=require ('../controllers/Users.controller')
const { verifyTokenEmail, verifyTokenPassword, verifyTokenAdministrador } = require('../middlewares/Users.auth')
const { SignUpValidate, SigninValidate, ModifyUserValidate, ModifyPasswordValidate } = require('../validators/Users.validators')
const UserCtrl = require('../controllers/Email.controller')

router.get('/',ProCtrl.GetAll)
router.get('/:id', ProCtrl.Get);
router.get('/details/:id', ProCtrl.Getdetailsperosn);
// router.put('/UpdateDetails/:id',ProCtrl.updateDetailsPerson)

router.delete('/:id',verifyTokenAdministrador,verifyTokenEmail,ProCtrl.DeleteUser)
router.put('/UpdateUser/:id',ModifyUserValidate,verifyTokenEmail,ProCtrl.ModifyUser)
router.post('/InsertDetails/:id',verifyTokenEmail,ProCtrl.InsertDetailsUser)
router.put('/UpdateUser/Admin/:id',ModifyUserValidate,verifyTokenAdministrador,ProCtrl.ModifyUser)
router.put('/UpdatePassword/:id',ModifyPasswordValidate,verifyTokenPassword,ProCtrl.ModifyPassword)
router.post('/SignUp',SignUpValidate,ProCtrl.SignUp)
router.post('/SignIn',SigninValidate,ProCtrl.SignIn)


//Example
router.post('/Email/SolicitarCodigo',UserCtrl.PostEmailToken)
router.put('/Email/Cambio',UserCtrl.ChangePasswordToken)



module.exports = router;