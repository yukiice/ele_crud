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

    //分类数据 
    router.get('/categories',async (req,res)=>{
        // 限制category  为 10 条
        const items = await Category.find().limit(10)
        res.send(items)
    })




    // 挂载
    app.use('/admin/api', router)
}