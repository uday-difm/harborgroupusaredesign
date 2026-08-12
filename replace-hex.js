const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'app', 'component');

// Exact mappings from the implementation plan
const hexMap = {
  // Light Sky / Very Light
  '#7DD3FC': 'var(--color-navy-200)',
  '#BFDBFE': 'var(--color-navy-100)',
  '#93C5FD': 'var(--color-navy-200)',
  '#E0F2F7': 'var(--color-navy-50)',
  '#BBDEFB': 'var(--color-navy-100)',
  '#E3F2FD': 'var(--color-navy-50)',
  
  // Cyan / Teal / Sky Mid
  '#22D3EE': 'var(--color-navy-400)',
  '#20C997': 'var(--color-navy-400)',
  '#38BDF8': 'var(--color-navy-400)',
  '#4CAFDE': 'var(--color-accent)', // From MedicalPlanBenefitsSection
  
  // Medium / Solid Blues
  '#60A5FA': 'var(--color-navy-300)',
  '#3B82F6': 'var(--color-navy-500)',
  '#0EA5E9': 'var(--color-navy-500)',
  
  // Darker Blues / Primary
  '#2563EB': 'var(--color-primary)',
  '#0891B2': 'var(--color-primary)',
  '#1E3A8A': 'var(--color-primary)',
  '#1A2E5B': 'var(--color-primary)',
  
  // Red
  '#EF4444': 'var(--color-accent)'
};

const hexRegex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;

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
      
      content = content.replace(hexRegex, (match) => {
        const upperHex = match.toUpperCase();
        if (hexMap[upperHex]) {
          modified = true;
          return hexMap[upperHex];
        }
        return match; // Keep as is if no mapping found
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Replaced hex colors in: ${fullPath.replace(__dirname, '')}`);
      }
    }
  }
}

console.log('Starting hex replacement script...');
processDirectory(targetDir);
console.log('Hex replacement complete.');
