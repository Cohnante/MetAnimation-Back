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

const GetIdDetailsCourse = (req, res) => {
  try {
    let SelectId = `call GetDetailsCoursesByCourseId(?)`;
    conexion.query(SelectId, [req.params.id], (err, rows, fields) => {
      if (err) throw err;
      else {
        res.status(200).json(rows[0]);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const GetIdContentCourse = (req, res) => {
  try {
    let SelectId = `call GetContentCourseByDetailsCoursesId(?)`;
    conexion.query(SelectId, [req.params.id], (err, rows, fields) => {
      if (err) throw err;
      else {
        res.status(200).json(rows[0]);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const GetIdFilesCourse = (req, res) => {
  try {
    let SelectId = `call GetDetailsCoursesFilesByCourseId(?)`;
    conexion.query(SelectId, [req.params.id], (err, rows, fields) => {
      if (err) throw err;
      else {
        res.status(200).json(rows[0]);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const GetIdLinksCourse = (req, res) => {
  try {
    let SelectId = `call GetDetailsCoursesLinksByCourseId(?)`;
    conexion.query(SelectId, [req.params.id], (err, rows, fields) => {
      if (err) throw err;
      else {
        res.status(200).json(rows[0]);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
const GetComentsCourse = (req, res) => {
  try {
    let SelectId = `call GetCommentsByCourseId(?)`;
    conexion.query(SelectId, [req.params.id], (err, rows, fields) => {
      if (err) throw err;
      else {
        res.status(200).json(rows[0]);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  GetAllContentCourse,
  GetIdContentCourse,
  GetIdDetailsCourse,
  GetIdFilesCourse,
  GetIdLinksCourse,
  GetComentsCourse
}