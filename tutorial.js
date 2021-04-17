let sum = (sum1, sum2) => sum1 + sum2;
const p = "127.0.0.1";
class createobj{
    constructor(){
        console.log("object created");
    }
}
module.exports.sum = sum;
module.exports.p = p;
module.exports.createobj = createobj;
module.exports = {sum : sum, p : p, createobj : createobj}

module.exports.mydate = function(){
 return Date();
};