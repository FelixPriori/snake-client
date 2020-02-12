const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541
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