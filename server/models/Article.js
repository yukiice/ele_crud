const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title:{
        type:String
    },
    categories: {
        // 根据id  关联Category
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    },
    body:{type:String},
})

module.exports  =  mongoose.model('Article',schema)