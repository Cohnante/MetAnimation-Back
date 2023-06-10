const conexion = require('../config/mysql.config')

const GetAllContentCourse = (req,res)  =>{
  try {
    let SelectAll = 'call GetAllDetailsCourse();'
    conexion.query(SelectAll,(err,rows,fields)=>{
      if(err) throw err;
      else{
        res.status(200).json(rows[0])
      }
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

const GetIdContentCourse = (req,res)=>{
  try {
    let SelectId = `call GetIdDetailsCourse(?)`
    conexion.query(SelectId,[req.params.id],(err,rows,fields)=>{
      if(err) throw err;
      else{
        res.status(200).json(rows[0])
      }
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  GetAllContentCourse,
  GetIdContentCourse
}