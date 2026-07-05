const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images/optimized';

// Crear carpeta de salida si no existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Iniciando optimización de imágenes...');

function processDirectory(dir, relativeDir = '') {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(relativeDir, item);

        if (fs.statSync(fullPath).isDirectory()) {
            // Crear subdirectorio en output
            const outputSubDir = path.join(outputDir, relativePath);
            if (!fs.existsSync(outputSubDir)) {
                fs.mkdirSync(outputSubDir, { recursive: true });
            }
            // Procesar subdirectorio recursivamente
            processDirectory(fullPath, relativePath);
        } else if (item.match(/\.(jpg|jpeg|png)$/i)) {
            // Procesar imagen
            const outputPath = path.join(outputDir, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

            sharp(fullPath)
                .resize(1200, 800, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .webp({
                    quality: 70,
                    effort: 6
                })
                .toFile(outputPath)
                .then(info => {
                    const originalSize = fs.statSync(fullPath).size;
                    const newSize = info.size;
                    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
                    console.log(`✓ ${relativePath} → ${reduction}% reducción`);
                })
                .catch(err => {
                    console.error(`✗ Error procesando ${relativePath}:`, err.message);
                });
        }
    });
}

// Verificar que existe la carpeta de imágenes
if (!fs.existsSync(inputDir)) {
    console.error('Error: No se encontró la carpeta public/images');
    process.exit(1);
}

// Procesar todas las imágenes
processDirectory(inputDir);

console.log('Optimización iniciada. Las imágenes se guardarán en public/images/optimized/');