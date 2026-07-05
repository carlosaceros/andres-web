const fs = require('fs');
const path = require('path');

const procedures = [
  { dir: 'abdominoplastia', ns: 'abdominoplastia', name: 'Abdominoplastia', slug: 'abdominoplastia' },
  { dir: 'acido-hialuronico', ns: 'acido_hialuronico', name: 'Ácido Hialurónico', slug: 'acido-hialuronico' },
  { dir: 'bichectomia', ns: 'bichectomia', name: 'Bichectomía', slug: 'bichectomia' },
  { dir: 'blefaroplastia', ns: 'blefaroplastia', name: 'Blefaroplastia', slug: 'blefaroplastia' },
  { dir: 'botox', ns: 'botox', name: 'Botox', slug: 'botox' },
  { dir: 'elevacion-cola-cejas', ns: 'surgical_procedures.elevacion_cola_cejas', name: 'Elevación Cola de Cejas', slug: 'elevacion-cola-cejas' },
  { dir: 'explantacion-mamaria', ns: 'explantacion_mamaria', name: 'Explantación Mamaria', slug: 'explantacion-mamaria' },
  { dir: 'lifting-en-hamaca-de-mejilla-y-cuello', ns: 'lifting_hamaca_mejilla_cuello', name: 'Lifting en Hamaca de Mejilla y Cuello', slug: 'lifting-en-hamaca-de-mejilla-y-cuello' },
  { dir: 'lifting-facial-hamaca', ns: 'lifting_facial_hamaca', name: 'Lifting Facial en Hamaca', slug: 'lifting-facial-hamaca' },
  { dir: 'lip-lift', ns: 'lip_lift', name: 'Lip Lift', slug: 'lip-lift' },
  { dir: 'lipofilling-celulas-madre', ns: 'lipofilling_celulas_madre', name: 'Lipofilling con Células Madre', slug: 'lipofilling-celulas-madre' },
  { dir: 'liposuccion', ns: 'liposuccion', name: 'Liposucción', slug: 'liposuccion' },
  { dir: 'mamoplastia-aumento', ns: 'mamoplastia_aumento', name: 'Mamoplastia de Aumento', slug: 'mamoplastia-aumento' },
  { dir: 'mamoplastia-reduccion', ns: 'mamoplastia_reduccion', name: 'Mamoplastia de Reducción', slug: 'mamoplastia-reduccion' },
  { dir: 'mentoplastia', ns: 'mentoplastia', name: 'Mentoplastia', slug: 'mentoplastia' },
  { dir: 'otoplastia', ns: 'otoplastia', name: 'Otoplastia', slug: 'otoplastia' },
  { dir: 'pexia', ns: 'pexia', name: 'Pexia Mamaria', slug: 'pexia' },
  { dir: 'rinoplastia', ns: 'rinoplastia', name: 'Rinoplastia', slug: 'rinoplastia' },
];

const basePath = path.join(__dirname, '../src/app/[locale]/procedimientos');

let updated = 0;
let skipped = 0;

for (const proc of procedures) {
  const filePath = path.join(basePath, proc.dir, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${proc.dir} (file not found)`);
    skipped++;
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if already has ProcedureFAQSchema
  if (content.includes('ProcedureFAQSchema')) {
    console.log(`SKIP: ${proc.dir} (already has schema)`);
    skipped++;
    continue;
  }
  
  // Add import for ProcedureFAQSchema
  const importLine = `import ProcedureFAQSchema from '@/components/ProcedureFAQSchema';\n`;
  
  // Insert import after existing imports
  if (content.includes("import { getTranslations }")) {
    content = content.replace(
      "import { getTranslations }",
      importLine + "import { getTranslations }"
    );
  } else {
    // Add at top of imports
    content = importLine + content;
  }
  
  // Find the page function name and params pattern
  // Pattern: export default function SomePage() {
  // or export default async function SomePage({ params }) {
  
  // Need to add params to the function and inject the schema
  // Most pages have: export default function XxxPage() {
  
  // Get the namespace for translations (may differ from ns for FAQs)
  const faqNs = proc.ns;
  
  // Replace the function to add params and ProcedureFAQSchema
  const functionPattern = /export default (async )?function (\w+)\(\s*\)\s*\{/;
  const match = content.match(functionPattern);
  
  if (match) {
    const isAsync = match[1] || '';
    const funcName = match[2];
    
    const newFunction = `export default async function ${funcName}({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
`;
    content = content.replace(functionPattern, newFunction);
    
    // Now inject ProcedureFAQSchema before <ClientContent />
    const schemaComponent = `      <ProcedureFAQSchema
            locale={locale}
            namespace="${faqNs}"
            procedureName="${proc.name}"
            procedureUrl={\`https://drandrespereznieto.com/\${locale}/procedimientos/${proc.slug}\`}
          />`;
    
    // Try to inject before <ClientContent
    if (content.includes('<ClientContent />')) {
      content = content.replace(
        '<ClientContent />',
        schemaComponent + '\n          <ClientContent />'
      );
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`UPDATED: ${proc.dir}`);
  updated++;
}

console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`);
