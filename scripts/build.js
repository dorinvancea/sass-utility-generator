// scripts/build.js
const { exec } = require('child_process');
const config = require('../config');

const commands = config.files
  .map(({ src, dest }) => `sass --no-source-map ${src}:${dest}`)
  .join(' && ');

exec(commands, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
