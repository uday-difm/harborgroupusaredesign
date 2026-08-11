const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /text-indigo-900/g, replace: "text-primary" },
  { search: /bg-indigo-900/g, replace: "bg-primary" },
  { search: /text-sky-500/g, replace: "text-accent" },
  { search: /bg-sky-500/g, replace: "bg-accent" },
  { search: /hover:bg-sky-600/g, replace: "hover:bg-accent-dark" },
  { search: /border-sky-500/g, replace: "border-accent" },
  { search: /ring-sky-500/g, replace: "ring-accent" },
  { search: /text-red-300/g, replace: "text-error" },
  { search: /text-red-400/g, replace: "text-error" },
  { search: /text-red-500/g, replace: "text-error" },
  { search: /text-red-600/g, replace: "text-error" },
  { search: /border-red-400/g, replace: "border-error" },
  { search: /border-red-500/g, replace: "border-error" },
  { search: /bg-red-50/g, replace: "bg-error/10" },
  { search: /bg-red-100/g, replace: "bg-error/20" },
  { search: /bg-red-500/g, replace: "bg-error" },
  { search: /text-green-500/g, replace: "text-accent" },
  { search: /text-green-600/g, replace: "text-accent" },
  { search: /bg-indigo-100/g, replace: "bg-accent/10" }
];

const includePaths = [
  'src/app/component/home',
  'src/app/component/about',
  'src/app/component/majormedical',
  'src/app/component/medicalplan',
  'src/app/component/dentalplan',
  'src/app/component/visionplan',
  'src/app/component/termlife',
  'src/app/component/bundlesplan',
  'src/app/component/limitedmedplans',
  'src/app/component/accidentplan',
  'src/app/component/hospitalplan',
  'src/app/component/criticalplan',
  'src/app/component/lifestyleplan',
  'src/app/component/petplan',
  'src/app/component/rxplan',
  'src/app/component/forbrokers',
  'src/app/component/forindividuals',
  'src/app/component/resourcesfaq',
  'src/app/about-health',
  'src/app/accident-plan',
  'src/app/blog',
  'src/app/blogs',
  'src/app/bundles-plan',
  'src/app/careers',
  'src/app/contact',
  'src/app/critical-plan',
  'src/app/dental-care-plan',
  'src/app/for',
  'src/app/for-brokers',
  'src/app/for-individuals',
  'src/app/health-plans',
  'src/app/hospital-plan',
  'src/app/lifestyle-plan',
  'src/app/limited-med',
  'src/app/major-medical-plan',
  'src/app/medical-plan',
  'src/app/pet-plan',
  'src/app/privacy-policy',
  'src/app/resources-faq',
  'src/app/rx-plan',
  'src/app/sms-and-marketing-terms',
  'src/app/term-life',
  'src/app/terms-and-conditions',
  'src/app/vision-plan',
  'src/app/page.js',
  'src/app/not-found.js'
];

function processPath(targetPath) {
  const fullPath = path.resolve(__dirname, targetPath);
  if (!fs.existsSync(fullPath)) return;
  
  const stat = fs.statSync(fullPath);
  if (stat.isDirectory()) {
    const files = fs.readdirSync(fullPath);
    for (const file of files) {
      processPath(path.join(targetPath, file));
    }
  } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;
    for (const { search, replace } of replacements) {
      if (search.test(content)) {
        content = content.replace(search, replace);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated ${targetPath}`);
    }
  }
}

for (const p of includePaths) {
  processPath(p);
}
