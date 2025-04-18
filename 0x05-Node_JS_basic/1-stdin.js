const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Welcome to ALX, what is your name?\n', name => {
  console.log(`Hi ${name}!`);
  rl.close();
});
