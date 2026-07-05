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

console.log('🔄 Starting global find-and-replace for ignored media folders...');

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // 1. Replace relative videos/lifting hamaca paths (if any remaining)
    if (content.includes('/images/videos/') && !content.includes('https://media.drandrespereznieto.com/images/videos/')) {
      content = content.replace(/\/images\/videos\//g, 'https://media.drandrespereznieto.com/images/videos/');
      hasChanges = true;
    }
    if (content.includes('/images/lifting-hamaca/') && !content.includes('https://media.drandrespereznieto.com/images/lifting-hamaca/')) {
      content = content.replace(/\/images\/lifting-hamaca\//g, 'https://media.drandrespereznieto.com/images/lifting-hamaca/');
      hasChanges = true;
    }

    // 2. Replace /images/blefaroplastia/
    // Matches relative paths like "/images/blefaroplastia/..." but avoids replacing already absolute ones
    const blefaroRegex = /(?<!https:\/\/media\.drandrespereznieto\.com)\/images\/blefaroplastia\//g;
    if (blefaroRegex.test(content)) {
      content = content.replace(blefaroRegex, 'https://media.drandrespereznieto.com/images/blefaroplastia/');
      hasChanges = true;
    }

    // 3. Replace /images/todos/
    const todosRegex = /(?<!https:\/\/media\.drandrespereznieto\.com)\/images\/todos\//g;
    if (todosRegex.test(content)) {
      content = content.replace(todosRegex, 'https://media.drandrespereznieto.com/images/todos/');
      hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated media URLs in: ${path.relative(srcDir, filePath)}`);
    }
  }
});

console.log('🎉 Done! All ignored media folders are now pointing to the cPanel storage.');
