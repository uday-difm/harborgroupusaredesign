const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src');

const hexRegex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;

const results = {};

// Skip dashboard
function processDirectory(dirPath) {
  if (dirPath.includes('dashboard')) return;

  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      
      let match;
      while ((match = hexRegex.exec(content)) !== null) {
        const hex = match[0].toUpperCase();
        if (!results[hex]) {
          results[hex] = new Set();
        }
        results[hex].add(fullPath.replace(__dirname, ''));
      }
    }
  }
}

processDirectory(targetDir);

for (const [hex, files] of Object.entries(results)) {
  console.log(`\n${hex} (${files.size} files):`);
  for (const file of files) {
    console.log(`  - ${file}`);
  }
}
