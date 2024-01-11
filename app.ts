import http from 'http';

http.createServer((request, response) => {
    response.end('Hello world');
}).listen(3000, ()=> console.log('Server started.'))