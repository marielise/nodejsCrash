const http = require('http');
const path = require('path');
const fs = require('fs');

/* const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<h1>Home sd</h1>');
    res.end();
  }
}); */

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }

  if (req.url === '/api/users') {
    const users = [
      { name: 'bob', age: 40 },
      { name: 'Hoe', age: 30 }
    ];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});

const PORT = process.env.PORT || 5000; // check env variable or default to 5000

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
