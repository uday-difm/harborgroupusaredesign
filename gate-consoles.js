const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js')) {
      filelist.push(dirFile);
    }
  }
  return filelist;
};

const dirsToScan = [
  path.join(__dirname, 'src/app/component'),
  path.join(__dirname, 'src/common')
];

let files = [];
dirsToScan.forEach(dir => {
  files = files.concat(walkSync(dir));
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Remove console.log entirely
  if (content.match(/\/\/?\s*console\.log\(/g)) {
    content = content.replace(/^.*console\.log\(.*$/gm, '');
    changed = true;
  }

  // Gate console.error
  if (content.includes('console.error(')) {
    // Specifically target the standalone console.error calls and wrap them
    // We can use a regex to find `console.error(...)` and wrap it if not already wrapped.
    // A simple regex approach that handles the most common case:
    content = content.replace(/^(\s*)console\.error\((.*)\);?$/gm, (match, spaces, args) => {
      // Check if it's already gated
      // (This is a naive check, but fine for our codebase)
      return `${spaces}if (process.env.NODE_ENV === 'development') {\n${spaces}  console.error(${args});\n${spaces}}`;
    });
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
