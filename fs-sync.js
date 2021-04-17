let {readFileSync, writeFileSync} = require("fs");

const first = readFileSync('./content/firsttxt.txt', 'utf8');
const second = readFileSync('./content/secondtxt.txt', 'utf8');

console.log(first, second);

const write = writeFileSync('./content/result-sync.txt',
 `Here is the result: ${first}, ${second}`);

 //adding various flags: opens the file
//  const write2 = writeFileSync('./content/result-sync.txt',
//  `Here is the result: ${first}, ${second}`, {flag: 'a'});



