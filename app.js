// app.js
const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  response.end('Hello from Node.js pipeline!');
};
// comment added
const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error:', err);
  }
  console.log(`Server is listening on ${port}`);
});

