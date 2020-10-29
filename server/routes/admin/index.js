module.exports = app => {
    const express = require('express')
    // express的子路由
    const router = express.Router({
        // 合并url参数
        mergeParams: true
    })

    const Category = require('../../models/Category')


    //资源列表 
    router.get('/',async (req,res,next)=>{
        // 这是一个中间件，校验用户是否登录
        
    }, async (req, res) => {
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
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        // 这里做中间件处理  从而避免复杂的操作
        // 运用inflection这个插件，完成对路径小写转为大写的变换
        const modelName = require('inflection').classify(req.params.resource)
        // 这里表示给请求对象上挂载一个属性model
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    // 引入中间件multer
    const multer = require('multer')
    const upload = multer({
        dest: __dirname + '/../../uploads'
    })

    // 资源路由
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
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
        //1、根据用户名寻找用户
        // 获取用户模型
        const AdminUser = require('../../models/AdminUser')
        // 查询
        const user = await AdminUser.findOne({
            username
        }).select('+password') //因为做了加密，所以默认娶不到
        if (!user) {
            return res.status(422).send({
                message: '用户不存在，请检查用户名'
            })
        }
        //2、校验密码
        const isValid = require('bcrypt').compareSync(password, user.password)
        if (!isValid) {
            return res.status(422).send({
                message: '密码错误'
            })
        }
        //3、返回token
        const jwt = require('jsonwebtoken')
        const token = jwt.sign({
            id: user._id
        }, app.get('secret'))
        res.send({
            token
        })
    })


}