module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/node_crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}