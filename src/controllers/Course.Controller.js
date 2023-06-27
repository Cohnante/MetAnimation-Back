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

const AddCourse=async(req,res)=>{
    try {

    const NewCurso = new Cursos({
        informacion:{
            Name:req.body.informacion.Name,    
            Description:req.body.informacion.Description,
            Duration:req.body.informacion.Duration,
            IdTeacher:req.body.informacion.IdTeacher,
            Lenguaje:req.body.informacion.Lenguaje,
            Category:req.body.informacion.Category,
            Details:[{
                Name:req.body.informacion.Details.Name,
                State:req.body.informacion.Details.State,
                Url:req.body.informacion.Details.Url
            }],
            Modules:[{
                NameM:req.body.informacion.Modules.NameM,
                Clase:req.body.informacion.Modules.Clase,
                Url:req.body.informacion.Modules.Url
            }],
            Files:[{
                Name:req.body.informacion.Files.Name,
                State:req.body.informacion.Files.State,
                URl:req.body.informacion.Files.URl
            }],
            ClasesContent:[{
                Duration:req.body.informacion.ClasesContent.Duration,
                Description:req.body.informacion.ClasesContent.Description,
                Url:req.body.informacion.ClasesContent.Url,
                Status:req.body.informacion.ClasesContent.Status
            }],
            Links:[{
                Module:req.body.informacion.Links.Module,
                Name:req.body.informacion.Links.Name,
                State:req.body.informacion.Links.State,
                Url:req.body.informacion.Links.Url
            }]
        }
    })

    const CursoSave = await NewCurso.save()

    res.status(201).send(CursoSave)

    } catch (error) {
        console.error(error)
        return res.status(500).json(req.body);
    }
}

module.exports ={
    GetCourseAll,
    GetCourseElement,
    AddCourse
}