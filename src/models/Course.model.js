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
      Details:[{
        Name:{Type:Schema.Types.String},
        State:{Type:Schema.Types.Boolean},
        Url:{Type:Schema.Types.String}
      }],
      Modules:[{
        NameM:{Type:Schema.Types.String},
        Clase:{Type:Schema.Types.String},
        Url:{Type:Schema.Types.String}
      }],
      Files:[{
        Name:{Type:Schema.Types.String},
        State:{Type:Schema.Types.Boolean},
        URl:{Type:Schema.Types.String}
      }],
      ClasesContent:[{
        Duration:{Type:Schema.Types.Number},
        Description:{Type:Schema.Types.String},
        Url:{Type:Schema.Types.String},
        Status:{Type:Schema.Types.Boolean}
      }],
      Links:[{
        Module:{Type:Schema.Types.String},
        Name:{Type:Schema.Types.String},
        State:{Type:Schema.Types.Boolean},
        Url:{Type:Schema.Types.String}
      }]
    }
})

module.exports= mongoose.model('Cursos',CourseSchema)