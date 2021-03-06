const express = require('express')

const app = express()
app.set('secret','5454112')
app.use(require('cors')())
app.use(express.json())
// 引入上传
app.use('/uploads', express.static(__dirname + '/uploads'))
// 引入路由执行它
require('./routes/admin')(app)
// 引入数据库
require('./plugins/db')(app)






app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')
})