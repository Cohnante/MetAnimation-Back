const conexion = require('../config/mysql.config')

const GetAllTeacher = (req,res)=>{
    try {
        let sql = `call GetTeacherAll()`
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

const GetIdTeacher = (req,res)=>{ 
    try {
        const id = req.params.id
        let sql = `call GetTeacherId(?)`
        conexion.query(sql,[id],(err,rows,fields)=>{
            if(err) throw err
            else {
                res.status(200).json(rows[0])
            }
        })
    } catch (error) {
        return res.status(500).json({error})
    }
}

const AddTeacher = (req,res)=>{
    try {
        const {Experiencia,profesion,Estudios,PersonId} = req.body
        let sql = `call AddTeacher(?,?,?,?)`
        conexion.query(sql,[PersonId,profesion,Experiencia,Estudios],(err,rows,fields)=>{
            if(err)throw err
            else{
                res.status(200).json(rows)
            }
        })
    } catch (error) {
        return res.status(500).json({error})
    }
}

const UpdateTeacher = (req,res)=>{
    try {
        const {id} = req.params
        const {Experiencia,profesion,Estudio} = req.body
        console.log(Experiencia,Estudio,id);
        let sql = `call UpdateTeacher(${id},${Experiencia},'${Estudio}','${profesion}')`
        conexion.query(sql,(err,rows,fields)=>{
            if(err)throw err
            else{
                res.status(200).json({Message:"Success Update Teacher"})
            }
        })
    } catch (error) {
        return res.status(500).json({error})
    }
}

const DeleteTeacher = (req,res)=>{
    try {
        const {id} = req.params
        let sql = `call DeleteTeacher('${id}')`
        conexion.query(sql,(err,rows,fields)=>{
            if(err)throw err
            else{
                res.status(200).json({Message:"Success Delete Teacher"})
            }
        })
    } catch (error) {
        
    }
}
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////PROYECTO//////////////////////////////////////////////////// 

// Obtener detalle proyecto de usuario por su CC
function GetdetailsProyecto(req,res){
    try { 
        // Declaracion de la Id que se la pasa a la cadena de SQl
        const id = req.params.id
        // Cadena del procedimiento SQL para obtener un usuario por su id
        let sql = 'call GetProjectDetailsByUserId(?)'
        // Ejecucion de la cadena con la constante Id para buscar al usuario
        conexion.query(sql,[id],(err,rows,fields)=>{
            // Si hubo un error no se envia nada y se le pasa el codigo de status 404(not found)
            if(err) res.status(404).json({message:"Usuario no encontrado"});
            // si se encuentra algo se le pasa con el status 200
            else{
                res.status(200).json(rows[0])
            }
        })
    } catch (error) {
        // Si hay un error por parte del servidor se le dira el error
        return res.status(500).json({error});
    }
   
};

module.exports={
    GetAllTeacher,
    AddTeacher,
    GetIdTeacher,
    UpdateTeacher,
    DeleteTeacher, 


// Proyecto
    GetdetailsProyecto
}