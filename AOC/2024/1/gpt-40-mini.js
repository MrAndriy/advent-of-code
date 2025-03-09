const fs = require('fs');

// Read the input from the file
fs.readFile('2024/1/input.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Initialize two arrays to hold the location IDs
  const leftList = [];
  const rightList = [];

  // Process each line to separate the two lists
  const lines = data.trim().split('\n');
  lines.forEach((line) => {
    const [left, right] = line.split(' ').map(Number);
    leftList.push(left);
    rightList.push(right);
  });

  // Sort both arrays
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  // Calculate the total distance
  const totalDistance = leftList.reduce((sum, l, index) => {
    return sum + Math.abs(l - rightList[index]);
  }, 0);

  // Output the total distance
  console.log('Total distance:', totalDistance);
});
