const fs = require('fs');
const path = require('path');

const sharedDir = path.join(__dirname, '../shared-hosting');
const outputDir = path.join(__dirname, 'extracted');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Simple HTML text extractor (strips scripts, styles, and tags)
function cleanHtml(html) {
  let cleaned = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  
  // Extract main headings and paragraphs
  const regex = /<(h1|h2|h3|p|li)[^>]*>([\s\S]*?)<\/\1>/gi;
  let matches = [];
  let match;
  while ((match = regex.exec(cleaned)) !== null) {
    let tag = match[1].toLowerCase();
    let text = match[2]
      .replace(/<[^>]+>/g, '') // Strip remaining inline tags
      .replace(/\s+/g, ' ')
      .trim();
    if (text) {
      if (tag.startsWith('h')) {
        matches.push(`\n## ${text}\n`);
      } else if (tag === 'li') {
        matches.push(`* ${text}`);
      } else {
        matches.push(text);
      }
    }
  }
  return matches.join('\n');
}

fs.readdirSync(sharedDir).forEach(folder => {
  let folderPath = path.join(sharedDir, folder);
  if (fs.statSync(folderPath).isDirectory() && folder !== 'aprende') {
    let indexPath = path.join(folderPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      console.log(`Extracting text from: ${folder}`);
      let html = fs.readFileSync(indexPath, 'utf8');
      let text = cleanHtml(html);
      fs.writeFileSync(path.join(outputDir, `${folder}.md`), text, 'utf8');
    }
  }
});

console.log('🎉 Extraction completed! MD files saved in: scripts/extracted/');
