"use strict";

module.exports = function (app) {
  var express = require('express'); // express的子路由


  var router = express.Router({
    // 合并url参数
    mergeParams: true
  });

  var Category = require('../../models/Category'); //分类数据请求 


  router.get('/', function _callee(req, res) {
    var queryOptions, items;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 限制category  为 10 条
            // populate是关联的意思 可以查出来
            // 这里做条件筛选
            queryOptions = {};

            if (req.Model.modelName === 'Category') {
              queryOptions.populate = 'parent';
            }

            _context.next = 4;
            return regeneratorRuntime.awrap(req.Model.find().setOptions(queryOptions).limit(10));

          case 4:
            items = _context.sent;
            res.send(items);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  }); // 创建分类数据

  router.post('/', function _callee2(req, res) {
    var model;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(req.Model.create(req.body));

          case 2:
            model = _context2.sent;
            // 返回客户端
            res.send(model);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }); // 编辑分类数据

  router.put('/:id', function _callee3(req, res) {
    var model;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(req.Model.findByIdAndUpdate(req.params.id, req.body));

          case 2:
            model = _context3.sent;
            // 返回客户端
            res.send(model);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  }); // 删除分类数据

  router["delete"]('/:id', function _callee4(req, res) {
    var model;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(req.Model.findByIdAndDelete(req.params.id, req.body));

          case 2:
            model = _context4.sent;
            // 返回客户端
            res.send(model);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  }); //分类数据根据ID进行跳转编辑 

  router.get('/:id', function _callee5(req, res) {
    var model;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(req.Model.findById(req.params.id));

          case 2:
            model = _context5.sent;
            res.send(model);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  }); // 挂载

  app.use('/admin/api/rest/:resource', function _callee6(req, res, next) {
    var modelName;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // 这里做中间件处理  从而避免复杂的操作
            // 运用inflection这个插件，完成对路径小写转为大写的变换
            modelName = require('inflection').classify(req.params.resource); // 这里表示给请求对象上挂载一个属性model

            req.Model = require("../../models/".concat(modelName));
            next();

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    });
  }, router);
};