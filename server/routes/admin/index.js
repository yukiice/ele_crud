module.exports = app => {
    const express = require('express')
    // express的子路由
    const router = express.Router()

    const Category = require('../../models/Category')
    // 创建分类数据
    router.post('/categories', async (req, res) => {
        // 创建模型接受
        const model = await Category.create(req.body)
        // 返回客户端
        res.send(model)
    })
    // 编辑分类数据
    router.put('/categories/:id', async (req, res) => {
        // 创建模型接受
        const model = await Category.findByIdAndUpdate(req.params.id, req.body)
        // 返回客户端
        res.send(model)
    })
     // 编辑分类数据
     router.delete('/categories/:id', async (req, res) => {
        // 创建模型接受
        const model = await Category.findByIdAndDelete(req.params.id, req.body)
        // 返回客户端
        res.send(model)
    })

    //分类数据 
    router.get('/categories', async (req, res) => {
        // 限制category  为 10 条
        // populate是关联的意思 可以查出来
        const items = await Category.find().populate('parent').limit(10)
        res.send(items)
    })

    //分类数据根据ID进行跳转编辑 
    router.get('/categories/:id', async (req, res) => {
        // 限制category  为 10 条
        const model = await Category.findById(req.params.id)
        res.send(model)
    })



    // 挂载
    app.use('/admin/api', router)
}