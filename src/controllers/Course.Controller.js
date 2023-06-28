const Cursos = require('../models/Course.model')
require('dotenv').config()


const GetCourseAll = async(req,res) =>{
    try {
        const CursosGetAll =await Cursos.find()
        res.status(200).json(CursosGetAll)
    } catch (error) {
        return res.status(500).json({error});
    }
}

const GetCourseElement = async(req,res)=>{
    try {
        const CursosFound = await Cursos.findById(req.params.id)
        return res.status(200).json(CursosFound)
    } catch (error) {
        return res.status(500).json({error});
    }
}

const AddCourse = async(req,res)=>{
    try {

        const NewCurso = new Cursos({
            informacion:{
                Name:req.body.informacion.Name,    
                Description:req.body.informacion.Description,
                Duration:req.body.informacion.Duration,
                IdTeacher:req.body.informacion.IdTeacher,
                Lenguaje:req.body.informacion.Lenguaje,
                Category:req.body.informacion.Category,
                Details:[req.body.Details],
                Modules:[req.body.Modules],
                Files:[req.body.Files],
                ClasesContent:[req.body.ClasesContent],
                Links:[req.body.Links]
            }
        })
    
        const CursoSave = await NewCurso.save()
    
        res.status(201).send(CursoSave)
    
        } catch (error) {
            return res.status(500).json(error);
        }
}

module.exports ={
    GetCourseAll,
    GetCourseElement,
    AddCourse
}