const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

console.log('🔄 Starting global find-and-replace for media URLs...');

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // Replace relative video paths with the new media subdomain
    if (content.includes('/images/videos/')) {
      content = content.replace(/\/images\/videos\//g, 'https://media.drandrespereznieto.com/images/videos/');
      hasChanges = true;
    }
    if (content.includes('/images/lifting-hamaca/')) {
      content = content.replace(/\/images\/lifting-hamaca\//g, 'https://media.drandrespereznieto.com/images/lifting-hamaca/');
      hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated media URLs in: ${path.relative(srcDir, filePath)}`);
    }
  }
});

console.log('🎉 Done! Media URLs have been updated to point to media.drandrespereznieto.com');
