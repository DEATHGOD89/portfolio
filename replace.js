const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/components');

const replaceInFiles = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('gold')) {
        content = content.replace(/gold/g, 'crimson');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Replaced in ${fullPath}`);
      }
    }
  });
};

replaceInFiles(directoryPath);
