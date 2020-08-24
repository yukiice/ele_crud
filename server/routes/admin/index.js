module.exports = app => {
    const express = require('express')
    // express的子路由
    const router = express.Router({
        // 合并url参数
        mergeParams: true
    })

    const Category = require('../../models/Category')


    //分类数据请求 
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

    // 创建分类数据
    router.post('/', async (req, res) => {
        // 创建模型接受
        const model = await req.Model.create(req.body)
        // 返回客户端
        res.send(model)
    })


    // 编辑分类数据
    router.put('/:id', async (req, res) => {
        // 创建模型接受
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        // 返回客户端
        res.send(model)
    })
    // 删除分类数据
    router.delete('/:id', async (req, res) => {
        // 创建模型接受
        const model = await req.Model.findByIdAndDelete(req.params.id, req.body)
        // 返回客户端
        res.send(model)
    })



    //分类数据根据ID进行跳转编辑 
    router.get('/:id', async (req, res) => {
        // 限制category  为 10 条
        const model = await req.Model.findById(req.params.id)
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
}