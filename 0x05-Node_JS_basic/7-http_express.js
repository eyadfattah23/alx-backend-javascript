const express = require('express');
const countStudents = require('./3-read_file_async_1');

const app = express();
const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database).then((resolved) => {
    res.status(200).send(`This is the list of our students\n${resolved.total}\n${resolved.CS}\n${resolved.SWE}`);
  }).catch((err) => { res.send(`This is the list of our students\n${err.message}`); });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
