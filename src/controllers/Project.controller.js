const conexion = require('../config/mysql.config');

function GetdetailsProyecto(req, res) {
  try {
    const id = req.params.id;
    let sql = 'CALL GetProjectDetailsByUserId(?)';
    conexion.query(sql, [id], (err, results) => {
      if (err) throw err;
      if (results[0].length === 0) {
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
    conexion.query(sql, [id], (err, results) => {
      if (err) throw err;
      if (results[0].length === 0) {
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
    conexion.query(sql, [id], (err, results) => {
      if (err) throw err;
      if (results[0].length === 0) {
        res.status(404).json({ message: "Proyecto no encontrado" });
      } else {
        res.status(200).json(results[0]);
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

const InsertProjectUser = (req, res) => {
  try {
    let { id } = req.params;
    let { DescripcionProyecto, NombreProyecto, Img1 } = req.body;

    let sqlInsert = `INSERT INTO Project (NameProject, DescriptionProject, ImgProject, IdUsuario) VALUES ('${NombreProyecto}', '${DescripcionProyecto}', '${Img1}', '${id}')`;

    conexion.query(sqlInsert, (err, result) => {
      if (err) throw err;
      else {
        // Obtener el IdProject del registro insertado
        let insertedId = result.insertDId;
        res.status(200).json({ Message: "Proyecto Insertado", IdProject: insertedId });
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};


const InserRecurseproject = (req, res) => {
  try {
    let { idProject, imgUrls } = req.body;

    let sqlInsert = `INSERT INTO RecourseProject (IdProject, Url) VALUES ?`;

    let values = imgUrls.map(url => [idProject, url]);

    conexion.query(sqlInsert, [values], (err, result) => {
      if (err) throw err;
      else {
        res.status(200).json({ Message: "Recursos insertados" });
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  GetdetailsProyecto,
  GetAllProyecto,
  GetAllArtist,
  GetAllProjectuser,
  GetProjeById,
  InsertProjectUser,
  InserRecurseproject
};
