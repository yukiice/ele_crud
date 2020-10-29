const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String,
        select: false,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    },
    remember: {
        type: Boolean
    }
})

module.exports = mongoose.model('AdminUser', schema)