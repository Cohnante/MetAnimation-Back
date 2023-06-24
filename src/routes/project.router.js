const Router = require('express').Router();
const Project = require('../controllers/Project.controller')

//aca van los metodos get,post,put,delete
Router.get('/',Project.GetAllProyecto)
Router.get('/artist',Project.GetAllArtist)


///////////PROYECTO/////////////////
Router.get('/detils/:id',Project.GetdetailsProyecto)
Router.get('/allprject/:id',Project.GetAllProjectuser)
Router.get('/:id',Project.GetProjeById)
//router.post('/Insertproject/:id',verifyTokenEmail,Project.InsertProjectUser)



module.exports = Router