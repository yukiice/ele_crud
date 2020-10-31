"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var http = _axios["default"].create({
  baseURL: 'http://localhost:3000/admin/api'
}); // 拦截器添加token


http.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
http.interceptors.response.use(function (res) {
  return res;
}, function (err) {
  if (err.response.data.message) {
    _vue["default"].prototype.$message({
      type: 'error',
      message: err.response.data.message
    });
  }

  return Promise.reject(err);
});
var _default = http;
exports["default"] = _default;