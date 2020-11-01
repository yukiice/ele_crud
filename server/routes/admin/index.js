module.exports = app => {
    const express = require('express')
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const User = require('../../models/User')
    // express的子路由
    const router = express.Router({
        // 合并url参数
        mergeParams: true
    })

    // 登录校验中间件
    const authMiddleware = require('../../middleware/auth')

    // 资源中间件
    const resourceMiddleware = require('../../middleware/resource')

    //资源列表 
    router.get('/', async (req, res) => {
        // 限制category  为 10 条
        // populate是关联的意思 可以查出来

        // 这里做条件筛选
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })

    //资源详情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    // 创建资源数据
    router.post('/', async (req, res) => {
        // 创建模型接受
        const model = await req.Model.create(req.body)
        // 返回客户端
        res.send(model)
    })


    // 编辑资源数据
    router.put('/:id', async (req, res) => {
        // 创建模型接受
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        // 返回客户端
        res.send(model)
    })
    // 删除资源数据
    router.delete('/:id', async (req, res) => {
        // 创建模型接受
        const model = await req.Model.findByIdAndDelete(req.params.id, req.body)
        // 返回客户端
        res.send(model)
    })

    // 挂载
    app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

    // 引入中间件multer
    const multer = require('multer')
    const upload = multer({
        dest: __dirname + '/../../uploads'
    })

    // 资源路由
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    //  登录的路由
    app.post('/admin/api/login', async (req, res) => {
        const {
            username,
            password
        } = req.body
        // 1.根据用户名找用户
        const user = await User.findOne({
            username
        }).select('+password')
        assert(user, 422, '用户不存在')
        // 2.校验密码
        const isValid = require('bcryptjs').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')
        // 3.返回token
        const token = jwt.sign({
            id: user._id
        }, app.get('secret'))
        res.send({
            token
        })
    })

    // 错误处理函数
    app.use(async (err, req, res, next) => {
        // console.log(err)
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}