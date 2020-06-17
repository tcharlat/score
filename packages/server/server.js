"use strict";
exports.__esModule = true;
var http_1 = require("http");
http_1.createServer(function (req, res) {
    var bonhome = {
        poids: 1
    };
    console.log("UN PETIT BONHOMME", bonhome);
    res.end("coucou");
}).listen(1337);
