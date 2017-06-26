var http = require('http');

http.createServer(
	function (req, res) {
		//var exec = require('child_process').exec;

		/*var spawn = require('child_process').spawn;
		var child = spawn(cmd);
	
		child.stdout.on('data', function(chunk) {
		  // output will be here in chunks
			pCMD = chunk;
		});*/
		
		/*var nrc = require('node-run-cmd');
		
		var dataCallback = function(data) {
			console.log(data.toString('utf8'));
			
			res.setHeader('Connection', 'Transfer-Encoding');
			res.setHeader('Content-Type', 'text/html; charset=utf-8');
			res.setHeader('Transfer-Encoding', 'chunked');

			res.write('Website : [' + cmd + ']\n');
			res.write('Auto Network Troubleshooting Tools By NamKing\n\n');
			res.write('Output : \n' + data.toString() + '\nEnd :\n');
			res.end('Enterprise Service Desk\n');
			
		};
		nrc.run(cmd, { onData: dataCallback });*/
		
		res.setHeader('Connection', 'Transfer-Encoding');
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.setHeader('Transfer-Encoding', 'chunked');
		
		console.log(req.url);
		var cmd = req.url.split("/");
		
		res.write('Auto Network Troubleshooting Tools By NamKing\nEnterprise Service Desk\n');
		
		res.write("<pre>");
		
		if (req.url != "/favicon.ico") {
			if (cmd.length == 2) {
				var child = require('child_process').spawn(cmd[1]);
				res.write('Command : [' + cmd[1] + ']\n');
			}else{
				var child = require('child_process').spawn(cmd[1], [cmd[2]]);
				res.write('Command : [' + cmd[1] + ' ' + cmd[2] + ']\n');
			}
			
			// add a 'data' event listener for the spawn instance
			child.stdout.on('data', function(data) {
				console.log(data.toString('utf8'));
				res.write(data.toString() + "\n");
			});
			
			child.stdout.on('error', function(data) {
				res.end("DONE.</pre>");
			});

			child.stdout.on('end', function(data) {
				res.end("DONE.</pre>");
			});
		}else{
			console.log('error');
			res.end("DONE.</pre>");
		}

	}
).listen(8080);

console.log('Server running at port 8080');