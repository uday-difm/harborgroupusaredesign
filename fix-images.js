const fs = require('fs');
const path = require('path');
const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src/app/component'));
let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  content = content.replace(/<Image([^>]+)>/g, (match, attrs) => {
    if (!attrs.includes('object-cover') && !attrs.includes('object-contain') && attrs.includes('width=')) {
      if (attrs.includes('className="')) {
        attrs = attrs.replace(/className="/, 'className="object-cover ');
      } else if (attrs.includes("className='")) {
        attrs = attrs.replace(/className='/, "className='object-cover ");
      } else {
        attrs += ' className="object-cover"';
      }
      changed = true;
      count++;
    }
    return `<Image${attrs}>`;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Fixed Image in:', file);
  }
});
console.log('Total fixed:', count);
