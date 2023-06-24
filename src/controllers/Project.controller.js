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

// Obtener todos los proyecto de usuario por su CC
function GetAllProjectuser(req, res) {
  try {
    // Declaracion de la Id que se la pasa a la cadena de SQl
    const id = req.params.id;
    // Cadena del procedimiento SQL para obtener un usuario por su id
    let sql = 'CALL GetAllProjectsbyUser(?)';
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

// Obtener todos los proyectos
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


// Obtener todos los artistas
const GetAllArtist = (req,res)=>{
  try {
      let sql = `call GetProjectArtist()`
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

// Obtener  proyecto de id de proyecto
function GetProjeById(req, res) {
  try {
    // Declaracion de la Id que se la pasa a la cadena de SQl
    const id = req.params.id;
    // Cadena del procedimiento SQL para obtener un usuario por su id
    let sql = 'CALL GetProjectById(?)';
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


async function InsertProjectUser(req, res, next) {
  try {
    const { id } = req.params;
    const { nombreProyecto, descripcionPoyecto, img1, img2, img3 } = req.body;

    // Verificar si existe un registro en la tabla Project para el ID dado
    const searchProject = `SELECT IdProject FROM Project WHERE IdPerson = ${id}`;
    conexion.query(searchProject, (err, projectRows, fields) => {
      if (err) throw err;

      if (projectRows.length === 0) {
        // No existe un registro en la tabla Project, realizar inserción
        const insertProject = `INSERT INTO Project (IdPerson, NameProject, DescriptionProject) 
                               VALUES (${id}, '${nombreProyecto}', '${descripcionPoyecto}')`;
        conexion.query(insertProject, (err, insertProjectResult, fields) => {
          if (err) throw err;

          const projectId = insertProjectResult.insertId;

          // Insertar recursos en la tabla RecourseProject
          insertRecourse(projectId, img1);
          if (img2) {
            insertRecourse(projectId, img2);
          }
          if (img3) {
            insertRecourse(projectId, img3);
          }

          res.status(200).json({ Message: "Detalles Agregados" });
        });
      } 
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
function insertRecourse(projectId, imageUrl) {
  const insertRecourse = `INSERT INTO RecourseProject (IdProject, Url) 
                          VALUES (${projectId}, '${imageUrl}')`;
  conexion.query(insertRecourse, (err, insertRecourseResult, fields) => {
    if (err) throw err;
  });
}


module.exports = {

GetdetailsProyecto,
GetAllProyecto,
GetAllArtist,
GetAllProjectuser,
GetProjeById,
InsertProjectUser
}