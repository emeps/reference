const http = require('http');
const port = 3000;
const hostname = '192.263.366.3'

const server = http.createServer((request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(`<h1>${hostname}</h1>`);
})

server.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
    
})