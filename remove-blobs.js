const fs = require('fs');
const path = require('path');

const files = [
  'src/app/health-plans/page.js',
  'src/app/component/resourcesfaq/Faq.jsx',
  'src/app/component/resourcesfaq/LatestArticles.jsx',
  'src/app/component/resourcesfaq/ResourcesHelpCenterPage.jsx',
  'src/app/component/medicalplan/MedicalPlanBenefitsSection.jsx',
  'src/app/component/medicalplan/CoverageOptionsSection.jsx',
  'src/app/component/home/WhyChooseUs.jsx',
  'src/app/component/home/Hero.jsx',
  'src/app/component/forbrokers/HowtoPartner.jsx',
  'src/app/component/forbrokers/Benefitsofcollaboration.jsx',
  'src/app/component/forindividuals/GetAHealthPlanConsultant.jsx',
  'src/app/component/dentalplan/DentalNetworkSection.jsx'
];

for (const relPath of files) {
  const fullPath = path.resolve(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove the blob divs
    content = content.replace(/<div[^>]*blur-3xl[^>]*>[\s\S]*?<\/div>/g, '');
    content = content.replace(/<div[^>]*blur-3xl[^>]*\/>/g, '');
    
    // Replace animated-gradient-bg with bg-white
    content = content.replace(/animated-gradient-bg/g, 'bg-white');
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Processed', relPath);
  }
}
