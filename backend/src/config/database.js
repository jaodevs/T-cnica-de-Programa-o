const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo',{useMongoClient:true})
module.exports = mongoose.connect('mongodb://localhost/cadastro',{useMongoClient:true})