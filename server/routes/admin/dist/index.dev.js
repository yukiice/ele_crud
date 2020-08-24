"use strict";

module.exports = function (app) {
  var express = require('express'); // express的子路由


  var router = express.Router();

  var Category = require('../../models/Category'); // 创建分类数据


  router.post('/categories', function _callee(req, res) {
    var model;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Category.create(req.body));

          case 2:
            model = _context.sent;
            // 返回客户端
            res.send(model);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  }); // 编辑分类数据

  router.put('/categories/:id', function _callee2(req, res) {
    var model;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Category.findByIdAndUpdate(req.params.id, req.body));

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

  router["delete"]('/categories/:id', function _callee3(req, res) {
    var model;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(Category.findByIdAndDelete(req.params.id, req.body));

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
  }); //分类数据 

  router.get('/categories', function _callee4(req, res) {
    var items;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(Category.find().populate('parent').limit(10));

          case 2:
            items = _context4.sent;
            res.send(items);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  }); //分类数据根据ID进行跳转编辑 

  router.get('/categories/:id', function _callee5(req, res) {
    var model;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(Category.findById(req.params.id));

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

  app.use('/admin/api', router);
};