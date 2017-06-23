var http = require('http');

http.createServer(
	function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Website : [' + req.url +  ']');
		res.write('Auto Network Troubleshooting Tools By NamKing\n');
		res.end('Enterprise Service Desk\n');
	}
).listen(8080);

console.log('Server running at port 8080');