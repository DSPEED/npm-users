require('http').createServer(function (q, s) {
  s.writeHead(301, { 'location': 'https://npmjs.org/forgot', 'content-type':'text/html' })
  s.end('<html>Moved: <a href="https://npmjs.org/forgot">https://npmjs.org/forgot</a>')
}).listen(80)
