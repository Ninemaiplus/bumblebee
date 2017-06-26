var http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Connection', 'Transfer-Encoding');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    console.log(req.url);

    res.write("<pre>");

    if (req.url == "/ping") {

        var child = require('child_process').spawn('ping', ["google.de"]);
        // add a 'data' event listener for the spawn instance
        child.stdout.on('data', function(data) {

            console.log(data.toString('utf8'));
            res.write(data.toString() + "\n");
        });

        child.stdout.on('end', function(data) {
            res.end("DONE.</pre>");
        });
    };


}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');