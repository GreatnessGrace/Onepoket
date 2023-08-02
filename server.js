// Task 1: Basic Node.js Server
const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

////////////////////////////////////////////////////////////////////

// Task 2: Data Manipulation with  Hardcoded Input:

// Using reduce method :
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  const numbers1 = [1, 2, 3, 4, 5];
  console.log(`Example 1 using reduce method for hardcoded Input : ${sumArray(numbers1)}`); 

// Using for loop :
function sumArrayWithForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(`Example 2 using for loop for hardcoded Input : ${sumArrayWithForLoop(numbers1)}`); 
  
  
////////////////////////////////////////////////////////////////////

// Task 2: Data Manipulation with user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

rl.question('Enter the array of integers (comma-separated): ', (input) => {
  const numbers = input.split(',').map((num) => parseInt(num, 10));

  if (numbers.some(isNaN)) {
    console.log('Invalid input. Please provide a valid array of integers.');
    rl.close();
    return;
  }

  const sum = sumOfArray(numbers);
  console.log('Sum of the numbers:', sum);

  rl.close();
});

////////////////////////////////////////////////////////////////////


// Task 3: Asynchronous File Handling

// Using Promise and .then .catch block
const fs = require('fs').promises;

const fileName = 'data.txt';

fs.readFile(fileName, 'utf8')
  .then((data) => {
    const wordCount = countWords(data);
    console.log(`Total word count using Promise: ${wordCount}`);
  })
  .catch((err) => {
    console.error(`Error reading file: ${err}`);
  });

function countWords(text) {
  const words = text.split(/\s+/);
  return words.length;
}


//Using async await 
const fileName2 = 'data.txt';

async function readFileAsync() {
  try {
    const data = await fs.readFile(fileName2, 'utf8');
    const wordCount = countWords(data);
    console.log(`Total word count using async await : ${wordCount}`);
  } catch (err) {
    console.error(`Error reading file: ${err}`);
  }
}

function countWords(text) {
  const words = text.split(/\s+/);
  return words.length;
}

readFileAsync();
