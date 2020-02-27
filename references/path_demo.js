const path = require('path');

console.log(path.basename(__filename));  //=> path_demo.js

console.log(path.dirname(__filename)); //=> /Users/marie-lisehamel/prog/nodejsCrash/references

console.log(path.extname(__filename));  //extension=> .js

// Create a path object
console.log(path.parse(__filename));

/*
{
  root: '/',
  dir: '/Users/marie-lisehamel/prog/nodejsCrash/references',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}

*/

console.log(path.parse(__filename).dir); //=>/Users/marie-lisehamel/prog/nodejsCrash/references

// join string for path => avoid issue with separator
console.log(path.join(__dirname, 'test', 'file.html'));  //=> /Users/marie-lisehamel/prog/nodejsCrash/references/test/file.html