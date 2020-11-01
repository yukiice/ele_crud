module.exports = options => {
    return async (req, res, next) => {
        // 这里做中间件处理  从而避免复杂的操作
        // 运用inflection这个插件，完成对路径小写转为大写的变换
        const modelName = require('inflection').classify(req.params.resource)
        // 这里表示给请求对象上挂载一个属性model
        req.Model = require(`../models/${modelName}`)
        next()
    }
}