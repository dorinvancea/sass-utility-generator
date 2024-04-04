// scripts/clearDist.js
const fs = require('fs');
const path = require('path');

const distFolder = path.resolve(__dirname, '../dist');

function clearDistFolder() {
  if (fs.existsSync(distFolder)) {
    fs.readdirSync(distFolder).forEach(file => {
      const filePath = path.join(distFolder, file);
      fs.unlinkSync(filePath);
    });
    console.log('Dist folder cleared.');
  } else {
    console.log('Dist folder does not exist, skipping.');
  }
}

clearDistFolder();
