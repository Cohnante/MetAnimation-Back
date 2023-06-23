const conexion = require('../config/mysql.config')

// Obtener detalle proyecto de usuario por su CC
function GetdetailsProyecto(req, res) {
  try {
    // Declaracion de la Id que se la pasa a la cadena de SQl
    const id = req.params.id;
    // Cadena del procedimiento SQL para obtener un usuario por su id
    let sql = 'CALL GetProjectDetailsByUserId(?)';
    // Ejecucion de la cadena con la constante Id para buscar al usuario
    conexion.query(sql, [id], (err, results) => {
      if (err) throw err;
      if (results[0].length === 0) {
        res.status(404).json({ message: "Proyecto no encontrado" });
      } else {
        res.status(200).json(results[0]);
      }
    });
  } catch (error) {
    // Si hay un error por parte del servidor se le dira el error
    return res.status(500).json({ error });
  }
}

// Obtener detalle proyecto de usuario por su CC
const GetAllProyecto = (req,res)=>{
  try {
      let sql = `call GetAllProjects()`
      conexion.query(sql,(err,rows,fields)=>{
          if(err) throw err
          else {
              res.status(200).json(rows[0])
          }
      })
  } catch (error) {
      return res.status(500).json({error})
  }
} 




module.exports = {

GetdetailsProyecto,
GetAllProyecto
}