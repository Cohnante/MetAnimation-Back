const Router = require('express').Router();
const Project = require('../controllers/Project.controller')

//aca van los metodos get,post,put,delete
Router.get('/',Project.GetAllProyecto)

///////////PROYECTO/////////////////
Router.get('/detils/:id',Project.GetdetailsProyecto)

module.exports = Router