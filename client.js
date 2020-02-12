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
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', console.log);
  conn.on('connect', () => {
    conn.write('Name: SK8');
  });
  return conn;
  
}

module.exports = {connect};