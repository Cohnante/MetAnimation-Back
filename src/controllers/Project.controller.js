const conexion = require('../config/mysql.config');

function GetdetailsProyecto(req, res) {
  try {
    const id = req.params.id;
    let sql = 'CALL GetProjectDetailsByUserId(?)';
    conexion.query(sql, [id], (err, rows) => {
      if (err) throw err;
      if (rows[0].length === 0) {
        res.status(404).json({ message: "Proyecto no encontrado" });
      } else {
        res.status(200).json(results[0]);
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

function GetAllProjectuser(req, res) {
  try {
    const id = req.params.id;
    let sql = 'CALL GetAllProjectsbyUser(?)';
    conexion.query(sql, [id], (err, rows) => {
      if (err) throw err;
      if (rows[0].length === 0) {
        res.status(404).json({ message: "Proyecto no encontrado" });
      } else {
        res.status(200).json(results[0]);
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

const GetAllProyecto = (req, res) => {
  try {
    let sql = `CALL GetAllProjects()`;
    conexion.query(sql, (err, rows, fields) => {
      if (err) throw err;
      else {
        res.status(200).json(rows[0]);
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

const GetAllArtist = (req, res) => {
  try {
    let sql = `CALL GetProjectArtist()`;
    conexion.query(sql, (err, rows, fields) => {
      if (err) throw err;
      else {
        res.status(200).json(rows[0]);
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

function GetProjeById(req, res) {
  try {
    const id = req.params.id;
    let sql = 'CALL GetProjectById(?)';
    conexion.query(sql, [id], (err, rows) => {
      if (err) throw err;
      if (rows[0].length === 0) {
        res.status(404).json({ message: "Proyecto no encontrado" });
      } else {
        res.status(200).json(rows[0]);
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function InsertProjectUser(req, res, next) {
  try {
    const { id } = req.params;
    const { nombreProyecto, descripcionPoyecto, ImgProject } = req.body;

    // Realizar la inserción del proyecto
    const sqlInsert = `INSERT INTO Project(NameProject, DescriptionProject, ImgProject, IdUsuario) 
                       VALUES ('${nombreProyecto}', '${descripcionPoyecto}', '${ImgProject}', ${id})`;
    conexion.query(sqlInsert, (err, rows, fields) => {
      if (err) throw err;

      // Obtener el ID del proyecto insertado
      const projectId = rows.insertId;

      // Realizar cualquier acción adicional necesaria
      // ...

      // Responder con éxito, incluyendo el ID del proyecto insertado
      res.status(200).json({ Message: "Proyecto Agregado", IdProject: projectId });
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}


async function InserRecurseproject(projectId, imageUrls) {
  imageUrls.forEach(imageUrl => {
    const sqlInsert = `INSERT INTO RecourseProject (IdProject, Url) 
                            VALUES (${projectId}, '${imageUrl}')`;
    conexion.query(sqlInsert, (err, rows, fields) => {
      if (err) throw err;
    });
  });
}

module.exports = {
  GetdetailsProyecto,
  GetAllProyecto,
  GetAllArtist,
  GetAllProjectuser,
  GetProjeById,
  InsertProjectUser,
  InserRecurseproject
};
