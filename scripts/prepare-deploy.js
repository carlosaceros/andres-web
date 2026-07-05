const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const DIST_DIR = path.join(__dirname, '../dist');
const NEXT_DIR = path.join(__dirname, '../.next');
const STANDALONE_DIR = path.join(NEXT_DIR, 'standalone');
const STATIC_SRC = path.join(NEXT_DIR, 'static');

console.log('🚀 Starting deployment preparation...');

// 1. Run Build
console.log('📦 Running npm run build...');
try {
    execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
    console.error('❌ Build failed!');
    process.exit(1);
}

// 2. Prepare Dist Directory
console.log('🧹 Preparing dist directory...');
if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR);

// 3. Copy Standalone Content (Handling Nested Paths)
console.log('📂 Copying standalone build...');
const NESTED_STANDALONE = path.join(STANDALONE_DIR, 'dr-andres-web-2026/web-andres');

if (fs.existsSync(NESTED_STANDALONE)) {
    // Copy only the app code, NOT node_modules from Mac
    fs.cpSync(NESTED_STANDALONE, DIST_DIR, { 
        recursive: true,
        filter: (src) => !src.includes('node_modules')
    });
} else {
    console.error('❌ .next/standalone not found!');
    process.exit(1);
}

// 4. Copy Static Assets to .next/static
console.log('📂 Copying static assets...');
const destStaticServer = path.join(DIST_DIR, '.next', 'static');
if (!fs.existsSync(path.join(DIST_DIR, '.next'))) fs.mkdirSync(path.join(DIST_DIR, '.next'), { recursive: true });
fs.cpSync(STATIC_SRC, destStaticServer, { recursive: true });

// 5. Copy Public folder to dist root
console.log('📂 Copying public folder (excluding heavy images, keeping images/blog)...');
fs.cpSync(path.join(__dirname, '../public'), path.join(DIST_DIR, 'public'), { 
    recursive: true, 
    filter: (src) => {
        const relative = path.relative(path.join(__dirname, '../public'), src);
        if (relative.startsWith('images')) {
            return relative === 'images' || relative.startsWith('images/blog');
        }
        return true;
    }
});

// 6. Copy Static Assets to public/_next/static
console.log('📂 Copying static assets for cPanel/Apache...');
const destPublicStatic = path.join(DIST_DIR, 'public', '_next', 'static');
fs.mkdirSync(path.join(DIST_DIR, 'public', '_next'), { recursive: true });
fs.cpSync(STATIC_SRC, destPublicStatic, { recursive: true });

console.log('✅ Deployment preparation complete!');
console.log(`📁 Files in "dist" are ready to be uploaded to cPanel root.`);
