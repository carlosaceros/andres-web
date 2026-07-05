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

console.log('🔄 Starting Safari video fix: adding playsInline and uncommenting video/mp4 sources...');

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // 1. Uncomment MP4 sources
    // Matches patterns like: {/*<source src="..." type="video/mp4" />*/}
    // or {/*} <source src="..." type="video/mp4" />*/ }
    const mp4Regex = /\{\/\*\s*\}?\s*(<source[^>]+type="video\/mp4"[^>]*>)\s*\*\/\}?/g;
    if (mp4Regex.test(content)) {
      content = content.replace(mp4Regex, '$1');
      hasChanges = true;
    }

    // 2. Add playsInline / playsinline to all <video tags
    // Matches <video but NOT <video ... playsInline or playsinline
    // Make sure we match case insensitively but replace correctly
    const videoRegex = /<video(?![\s\S]*?(playsInline|playsinline))/gi;
    if (videoRegex.test(content)) {
      content = content.replace(videoRegex, '<video playsInline');
      hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed video element for Safari in: ${path.relative(srcDir, filePath)}`);
    }
  }
});

console.log('🎉 Done! All video elements have been optimized for Safari (iOS / macOS).');
