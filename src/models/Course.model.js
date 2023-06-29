const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseSchema = new Schema({
      cursoNombre:String,
      cursoDescripcion:String,
      categoria:String,
      modulos:{type:Array},
      recursos:{type:Array}
}) 

module.exports= mongoose.model('Cursos',CourseSchema)