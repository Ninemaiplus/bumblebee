console.log('Hello Telnet');

var telnet = require('telnet-client')
var connection = new telnet()

var params = {
  host: '10.10.1.41',
  port: 23,
  shellPrompt: '/<R207\.TEMP38_AMAZON>/',
  loginPrompt: 'Username:',
  passwordPrompt: 'Password:',
  username: 'A!sbn',
  password: '@forward',
  timeout: 1500,
  // removeEcho: 4
}

connection.on('ready', function(prompt) {
  connection.send('show ver', function(err, response) {
    console.log(response)
  })
})

connection.on('timeout', function() {
  console.log('socket timeout!')
  connection.end()
})

connection.on('close', function() {
  console.log('connection closed')
})

connection.connect(params)