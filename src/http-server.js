const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const a = 1
    const b = 2
    const c = a + b
    console.log(c);

    res.writeHead(200, {
      'content-type': 'text/html; charset=utf-8'
    })
    res.write('<h1>debugger test<h1>')
    res.write('<h1>hello world<h1>')
    res.end('<p>end<p>')
  }
})

server.listen('9999', () => {
  console.log('127.0.0.1:9999...')
})