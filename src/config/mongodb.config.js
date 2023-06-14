const mongoose = require('mongoose')

mongoose.connect('mongodb://Cohnante:3113408016@ac-yeaes9q-shard-00-00.k2veybx.mongodb.net/MetAnimation?replicaSet=atlas-3a6n4o-shard-0&ssl=true&authSource=admin',{
    useNewUrlParser: true,
    UseUnifiedTopology: true,
}).then(db=>console.log(`la base de datos mongodb se conecto`))
    .catch(err => console.error(err));