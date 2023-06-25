const Router = require('express').Router();
const Project = require('../controllers/Project.controller');
const UserAuth=require('../middlewares/Users.auth')

Router.get('/', Project.GetAllProyecto);
Router.get('/artist', Project.GetAllArtist);

///////////PROYECTO/////////////////
Router.get('/details/:id', Project.GetdetailsProyecto);
Router.get('/allproject/:id', Project.GetAllProjectuser);
Router.get('/:id', Project.GetProjeById);
Router.post('/Insertproject/:id',UserAuth.verifyTokenEmail, Project.InsertProjectUser);
Router.post('/project/InsertRecourse/:projectId',UserAuth.verifyTokenEmail, Project.InserRecurseproject);


module.exports = Router;
