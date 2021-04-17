let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('demo_file.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    // fs.appendFile('demo_file.html', 'hello appender', function(err){
    //     if (err) throw err;
    //     console.log('saved');
    // });
}).listen(8080);