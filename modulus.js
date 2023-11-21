let readlineSync = require('readline-sync');
let fno = parseInt(readlineSync.question('First number '));
let sno = parseInt(readlineSync.question('Second number '));
console.log('Result is', fno%sno);