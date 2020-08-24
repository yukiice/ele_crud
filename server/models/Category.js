const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    parent: {
        // 表示他是一个数据库里面的objectId
        type: mongoose.SchemaTypes.ObjectId,
        // 表示关联的模型
        ref: 'Category'
    }
})

module.exports = mongoose.model('Category', schema)