
const fs = require('fs');
const path = require('path');


const inputFile = path.join(__dirname, 'input.txt');
const outputFile = path.join(__dirname, 'output.txt');


const data = fs.readFileSync(inputFile, 'utf8');


const total = data
  .trim()
  .split('\n')
  .reduce((sum, line) => {
    const [, number] = line.trim().split(' ');
    return sum + Number(number);
  }, 0);


fs.writeFileSync(outputFile, total.toString());

console.log(`Sum (${total}) written to output.txt`);

