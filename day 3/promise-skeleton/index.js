const fs = require('fs');

// how to read json file & convert to array
// var foods = fs.readFileSync('food.json', 'utf8')
// JSON.parse(foods)
  
console.log('------- start12')

fs.readFile('food.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data.toString()));
});

console.log('------- end')