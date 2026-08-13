const fs = require('fs');
const path = require('path');

const apiDirs = [
  'contact', 'majormedical', 'dentalplan', 'rxplan', 'medicalplan',
  'petplan', 'termlife', 'accidentplan', 'bundlesplan', 'criticalplan',
  'hospitalplan', 'limitedmed', 'visionplan', 'freequote', 'subscribe',
  'blogsubscribe', 'career', 'forbrokers', 'forindividuals', 'lifestyleplan'
];

const basePath = path.join(__dirname, 'src', 'app', 'api');

for (const dir of apiDirs) {
  const filePath = path.join(basePath, dir, 'route.js');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add import if not exists
    if (!content.includes('verifyRecaptcha')) {
      content = `import { verifyRecaptcha } from "../../../../lib/recaptcha";\n` + content;
    }

    // Insert recaptcha check
    // We look for `const body = await req.json();`
    // And replace it with the body extraction + validation
    if (!content.includes('recaptchaToken')) {
      // Find `const { ... } = body;` or just after `const body = await req.json();`
      const jsonMatch = content.match(/const body = await req\.json\(\);/);
      if (jsonMatch) {
        const replacement = `const body = await req.json();
    
    const recaptchaToken = body.recaptchaToken;
    if (!recaptchaToken) {
      return Response.json({ error: 'reCAPTCHA token is missing' }, { status: 400 });
    }
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return Response.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
    }`;
        content = content.replace('const body = await req.json();', replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${dir}/route.js`);
      } else {
        console.log(`Could not find req.json() in ${dir}/route.js`);
      }
    } else {
      console.log(`Already has recaptchaToken in ${dir}/route.js`);
    }
  } else {
    console.log(`File not found: ${dir}/route.js`);
  }
}
