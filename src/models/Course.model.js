const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    informacion:{
      Name:Schema.Types.String,
      Description:Schema.Types.String,
      Duration:Schema.Types.Number,
      IdTeacher:Schema.Types.Number,
      Lenguaje:Schema.Types.String,
      Category:Schema.Types.String,
      Details:{type:Array},
      Modules:{type:Array},
      Files:{type:Array},
      ClasesContent:{type:Array},
      Links:{type:Array}
    }
})

module.exports= mongoose.model('Cursos',CourseSchema)