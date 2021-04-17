let path = require('path');
const os = require("os");


const user = os.userInfo()
console.log(user);
console.log(os.uptime());

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);
//path
console.log(path.sep);
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);
console.log(path.basename(filePath));
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutePath);
