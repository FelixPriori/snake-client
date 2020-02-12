const net = require('net');
const {IP, PORT} = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  console.log('Connection established.');
  conn.write('Name: SK8');
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', console.log);

  return conn;
  
}

module.exports = {connect};

// let timer = 0;
// for(let i = 0; i < 50; i++) {
//   setTimeout(() => {
//     conn.write('Move: up'); 
//   }, timer += 50);
// }


/*  
  conn.write('Move: down');
  conn.write('Move: right');
  conn.write('Move: left');
*/