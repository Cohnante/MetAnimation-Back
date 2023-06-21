const GetMenu = (req,res)=>{
  try {
    res.json({
      'Rutas':'Las siguientes son las rutas validas',
      'Users':'/api/Users',
      'Company':'/api/Company',
      'Noticie':'/api/Noticie',
      'Course':'/api/Course',
      'ContentCourse':'/api/ContentCourse',
      'Category':'/api/Category',
      'Teacher':'/api/Teacher',
      'PodsCast':'/api/PodCast',
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports={GetMenu};