var hostName = '127.0.0.1';
require("heroku-alive").startKeepAlive(1, hostName, 1337);

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, hostName);


