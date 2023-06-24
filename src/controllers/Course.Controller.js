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
        Name:req.body.name,    
        Description:req.body.Description,
        Duration:req.body.Duration,
        IdTeacher:req.body.IdTeacher,
        Lenguaje:req.body.Lenguaje,
        Category:req.body.Category,
        Details:[{
          Name:req.body.Details.Name,
          State:req.body.Details.State,
          Url:req.body.Details.Url
        }],
    })

    const CursoSave = await NewCurso.save()

    res.status(201).send(CursoSave)

    } catch (error) {
        return res.status(500).json({error});
    }
}

const UpdateCourse=(req,res)=>{
  try {
    
  } catch (error) {
    
  }
}

module.exports ={
    GetCourseAll,
    GetCourseElement,
    AddCourse,
    UpdateCourse
}