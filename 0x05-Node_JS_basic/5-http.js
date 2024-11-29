const { createServer } = require('http');
const countStudents = require('./3-read_file_async_1');

const hostname = '127.0.0.1';
const port = 1245;
const database = process.argv[2];
const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(database).then((resolved) => {
      res.write(resolved.total);
      res.write('\n');
      res.write(resolved.CS);
      res.write('\n');
      res.end(resolved.SWE);
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
