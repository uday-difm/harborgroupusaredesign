const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'app', 'component');
const excludeDirs = ['home', 'medicalplan', 'majormedical'];

const replacements = {
  // Text colors
  'text-indigo-900': 'text-navy-800',
  'text-blue-900': 'text-navy-800',
  'text-sky-900': 'text-navy-800',
  'text-gray-900': 'text-navy-800',
  'text-slate-900': 'text-navy-800',
  
  'text-indigo-800': 'text-navy-700',
  'text-blue-800': 'text-navy-700',
  
  'text-indigo-600': 'text-navy-600',
  'text-blue-600': 'text-navy-600',
  
  'text-indigo-500': 'text-navy-500',
  'text-gray-500': 'text-navy-500',
  'text-gray-600': 'text-navy-500',
  'text-slate-500': 'text-navy-500',
  'text-slate-600': 'text-navy-500',
  
  // Accents
  'text-sky-500': 'text-accent',
  'text-blue-500': 'text-accent',
  'text-teal-500': 'text-accent',
  
  'bg-sky-500': 'bg-accent',
  'bg-blue-500': 'bg-accent',
  'bg-teal-500': 'bg-accent',
  
  'bg-sky-100': 'bg-accent/10',
  'bg-blue-100': 'bg-accent/10',
  
  // Backgrounds
  'bg-indigo-900': 'bg-navy-800',
  'bg-blue-900': 'bg-navy-800',
  'bg-sky-900': 'bg-navy-800',
  
  'bg-indigo-50': 'bg-navy-50',
  'bg-blue-50': 'bg-navy-50',
  'bg-sky-50': 'bg-navy-50',
  'bg-gray-50': 'bg-navy-50',
  'bg-slate-50': 'bg-navy-50',
  
  // Borders
  'border-gray-100': 'border-navy-100',
  'border-gray-200': 'border-navy-100',
  'border-slate-100': 'border-navy-100',
  'border-slate-200': 'border-navy-100',
  
  // Structural tokens
  'shadow-lg': 'card-elevated',
  'shadow-xl': 'card-elevated',
  'rounded-xl': 'rounded-card',
  'rounded-2xl': 'rounded-card',
  
  // Constraints
  'text-red-500': 'text-error',
  'text-red-600': 'text-error',
  'bg-red-500': 'bg-error',
  'text-green-500': 'text-success',
  'text-green-600': 'text-success',
  'text-black': 'text-navy-900'
};

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip excluded directories if they are at the top level of targetDir
      if (dirPath === targetDir && excludeDirs.includes(item)) {
        continue;
      }
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let modified = false;
      
      // We use a regex word boundary to ensure we only replace exact matches
      // Note: for classes with hyphens, \b might treat hyphens as boundaries,
      // so we use a custom regex matching approach or simple replace/replaceAll if careful.
      // A safer approach: split content by quotes (to only affect classNames), but since these are very specific tailwind tokens, replaceAll on the file is usually safe.
      
      for (const [oldClass, newClass] of Object.entries(replacements)) {
        // Create a regex that matches the exact class string, bounded by spaces, quotes, or backticks
        const regex = new RegExp(`(?<=["'\`\\s])${oldClass}(?=["'\`\\s])`, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, newClass);
          modified = true;
        }
      }
      
      // Special pass for buttons:
      // Replace arbitrary "bg-primary text-white" with "btn-accent"
      if (content.includes('bg-primary') || content.includes('text-primary')) {
          content = content.replace(/(?<=["'`\s])bg-primary(?=["'`\s])/g, 'bg-navy-800');
          content = content.replace(/(?<=["'`\s])text-primary(?=["'`\s])/g, 'text-navy-800');
          modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

console.log('Starting token refactor...');
processDirectory(targetDir);
console.log('Token refactor complete!');
