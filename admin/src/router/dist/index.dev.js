"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: "Main",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Main.vue'));
    });
  },
  children: [{
    path: '/home',
    component: function component() {
      '../views/Home.vue';
    }
  }, {
    path: '/categories/create',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/CategoryEdit.vue'));
      });
    }
  }, {
    path: '/categories/edit/:id',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/CategoryEdit.vue'));
      });
    },
    // 这里开启props传参，这样在组件中直接可以使用props来接受参数，而不用使用this.$router.params.id
    props: true
  }, {
    path: '/categories/list',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/CategoryList.vue'));
      });
    }
  }, // Item ------------------------------
  {
    path: '/items/create',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/ItemEdit.vue'));
      });
    }
  }, {
    path: '/items/edit/:id',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/ItemEdit.vue'));
      });
    },
    // 这里开启props传参，这样在组件中直接可以使用props来接受参数，而不用使用this.$router.params.id
    props: true
  }, {
    path: '/items/list',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/ItemList.vue'));
      });
    }
  }]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;