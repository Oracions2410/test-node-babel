"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use('/', function (req, res) {
  res.send('Welcome, to node babel');
});
app.listen(5000, function () {
  return console.log('App is listening to port 5000');
});
