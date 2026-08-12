const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'app');

const replacements = [
  // 1. Get Your Personalized Medical Plan
  {
    search: /className=["']bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 relative z-10["']/g,
    replace: 'className="btn-primary px-10 py-3 relative z-10"'
  },
  // 2. The huge sky-400 button string found across many plan pages
  {
    search: /className=["']([^"']*)bg-sky-400([^"']*)["']/g,
    replace: (match, p1, p2) => {
      return `className="btn-accent px-10 py-4 font-bold"`;
    }
  },
  // 3. For/page.js big blue gradient button
  {
    search: /className=["']inline-flex items-center justify-center px-8 py-3 border-2 border-transparent rounded-full text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg uppercase tracking-wider transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-0.5["']/g,
    replace: 'className="btn-primary px-8 py-3 text-lg"'
  },
  // 4. Blue-700 submit buttons
  {
    search: /className=["']w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75["']/g,
    replace: 'className="btn-primary w-full py-3 px-6 rounded-md"'
  }
];

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let modified = false;
      
      for (const { search, replace } of replacements) {
        if (search.test(content)) {
          content = content.replace(search, replace);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Updated button classes in: ${fullPath}`);
      }
    }
  }
}

console.log('Starting button class migration...');
processDirectory(targetDir);
console.log('Button migration complete!');
