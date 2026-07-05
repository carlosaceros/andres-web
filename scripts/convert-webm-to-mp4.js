const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '../public');

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

console.log('🎬 Starting WebM to MP4 automatic conversion...');

let filesToConvert = [];

walkDir(publicDir, (filePath) => {
  if (filePath.endsWith('.webm')) {
    let mp4Path = filePath.substring(0, filePath.lastIndexOf('.')) + '.mp4';
    if (!fs.existsSync(mp4Path)) {
      filesToConvert.push({ input: filePath, output: mp4Path });
    }
  }
});

console.log(`🔍 Found ${filesToConvert.length} WebM files to convert to MP4.`);

filesToConvert.forEach((file, index) => {
  let relativeInput = path.relative(publicDir, file.input);
  let relativeOutput = path.relative(publicDir, file.output);
  console.log(`\n───────────────────────────────────────`);
  console.log(`🚀 [${index + 1}/${filesToConvert.length}] Converting: ${relativeInput}`);
  
  try {
    // Run FFmpeg to convert to H.264 MP4 with AAC audio (Safari-friendly)
    // -y overrides output files if they exist
    const command = `ffmpeg -y -i "${file.input}" -c:v libx264 -pix_fmt yuv420p -c:a aac -b:a 128k "${file.output}"`;
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Success! Created: ${relativeOutput}`);
  } catch (error) {
    console.error(`❌ Failed to convert ${relativeInput}:`, error.message);
  }
});

console.log('\n🎉 Conversion process completed!');
