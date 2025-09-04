
const fs = require('fs');
const path = require('path');


const inputPath = path.join(__dirname, 'input.txt');
const outputPath = path.join(__dirname, 'output.txt');


fs.readFile(inputPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input.txt:', err);
    return;
  }


  const total = data
    .trim()
    .split('\n')
    .reduce((sum, line) => {
      const parts = line.trim().split(' ');
      const num = parseInt(parts[1], 10);
      return sum + num;
    }, 0);


  fs.writeFile(outputPath, total.toString(), (err) => {
    if (err) {
      console.error('Error writing output.txt:', err);
    } else {
      console.log(`Total sum (${total}) written to output.txt`);
    }
  });
});
