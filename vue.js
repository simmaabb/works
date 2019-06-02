var express = require("express");

var router = express.Router();

var { conn } = require("./utils/db");
var { setError, aesEncrypt, keys } = require("./utils");
var { getConn } = require("./utils/mongoose");
var { ObjectID } = require("mongodb");
const jwt = require('jsonwebtoken'); //用来生成token






module.exports = router;