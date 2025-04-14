

const size = parseInt(process.argv[2]);

if (size) {
  for (let length = 0; length < size; length++) {
    for (let width = 0; width < size; width++)
      process.stdout.write('X');
    console.log();
  }
}
