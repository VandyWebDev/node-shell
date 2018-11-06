// output a prompt
process.stdout.write('sara >');

// user event fires
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  let pwd = require('./pwd');
  process.stdout.write(pwd());
  if (cmd === 'ls') {
    let ls = require('./ls');
    ls();
  }
  //process.stdout.write('Is this what you said: ' + cmd);
  process.stdout.write('\nsara >');
});
