let http = require("http");
let url = require('url'); 
let mysql = require("mysql");

const _ = require('lodash');
const items = [1, [2,[3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);




const ip = "127.0.0.1"; //or domain ip
const port = 3000;
const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short story')
    }
    res.end(`
    <h2>oops!</h2>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">Back</a>
    `)
    //res.write('Welcome to our home page')
    // res.end()
})

server.listen(port, ip);
//console.log("running at http://" + ip + ":" + port + "/");










// const ip = "127.0.0.1"; //or domain ip
// http.createServer(function (req, res) {   
//     res.writeHead(200, {'Content-Type': 'text/html'});   
//     //res.write('Hello World, from html'); 
//     //res.write(req.url);
//     let q = url.parse(req.url, true).query;
//     let txt = q.year + " " + q.month;
//     res.end(txt); 
// }).listen(3000, ip);





// let dd = path.extname("multiple.js");
// console.log(dd);
// // console.log(process);
// let tutorial = require("./tutorial");
// console.log(tutorial);
// console.log(tutorial.sum(657, 988));
// console.log(tutorial.p);
// console.log(new tutorial.createobj());
// console.log(tutorial.mydate()); 

