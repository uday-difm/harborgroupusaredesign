const fs = require('fs');
const path = require('path');

function findJSX(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      findJSX(path.join(dir, file), fileList);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const files = findJSX(path.join(__dirname, 'src'));

const styleRegex = /{?\s*<style jsx>\{`[\s\S]*?(?:@keyframes (?:fadeInUp|slideInLeft)[\s\S]*?)`\}<\/style>\s*}?/g;

let updatedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  if (content.match(styleRegex) || content.includes('animate-fadeInUp') || content.includes('animate-slideInLeft')) {
    console.log(`Updating ${file}...`);
    
    // 1. Remove style block completely
    content = content.replace(styleRegex, '');
    
    // 2. Remove the utility classes so they don't crash
    content = content.replace(/\banimate-(?:fadeInUp|slideInLeft|fadeIn)(?:\s+delay-\d+)?\b/g, '');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        updatedFiles++;
    }
  }
}

console.log(`Updated ${updatedFiles} files.`);
