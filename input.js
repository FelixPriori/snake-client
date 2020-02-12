/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();

  const handleUserInput = (key) => {
    if (key === '\u0003'){
      process.exit();
    } else if (key === 'w') {
      connection.write("Move: up");
      connection.write("Move: up");
      connection.write("Move: up");
    } else if (key === 's') {
      connection.write("Move: down");
      connection.write("Move: down");
      connection.write("Move: down");
    } else if (key === 'd') {
      connection.write("Move: right");
      connection.write("Move: right");
      connection.write("Move: right");
    } else if (key === 'a') {
      connection.write("Move: left");
      connection.write("Move: left");
      connection.write("Move: left");
    } else if (key === '\033[A') {
      connection.write("Move: up");
    } else if (key === '\033[B') {
      connection.write("Move: down");
    } else if (key === '\033[C') {
      connection.write("Move: right");
    } else if (key === '\033[D') {
      connection.write("Move: left");
    } else if (key === 'c') {
      connection.write("Say: ciao losers!")
    }
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
}




module.exports = {setupInput};