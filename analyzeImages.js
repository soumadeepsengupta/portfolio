import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

// Get file size in KB
const getFileSizeInKB = (filePath) => {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
};

// Analyze images in public folder
const analyzeImages = () => {
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.svg', '.webp'].includes(ext);
  });

  console.log('📊 Current Image Sizes Analysis\n');
  console.log('=' .repeat(60));

  let totalSize = 0;
  const breakdown = {
    png: [],
    jpg: [],
    svg: [],
    other: []
  };

  imageFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    const sizeKB = parseFloat(getFileSizeInKB(filePath));
    const ext = path.extname(file).toLowerCase();
    
    totalSize += sizeKB;

    const info = { file, size: sizeKB };
    
    if (ext === '.png') breakdown.png.push(info);
    else if (ext === '.jpg' || ext === '.jpeg') breakdown.jpg.push(info);
    else if (ext === '.svg') breakdown.svg.push(info);
    else breakdown.other.push(info);
  });

  // Display by type
  console.log('\n🖼️  PNG Images:');
  breakdown.png.sort((a, b) => b.size - a.size).forEach(({ file, size }) => {
    console.log(`   ${file.padEnd(30)} ${size.toString().padStart(8)} KB`);
  });
  const pngTotal = breakdown.png.reduce((sum, img) => sum + img.size, 0);
  console.log(`   ${'TOTAL'.padEnd(30)} ${pngTotal.toFixed(2).padStart(8)} KB`);

  console.log('\n📷 JPG/JPEG Images:');
  breakdown.jpg.sort((a, b) => b.size - a.size).forEach(({ file, size }) => {
    console.log(`   ${file.padEnd(30)} ${size.toString().padStart(8)} KB`);
  });
  const jpgTotal = breakdown.jpg.reduce((sum, img) => sum + img.size, 0);
  console.log(`   ${'TOTAL'.padEnd(30)} ${jpgTotal.toFixed(2).padStart(8)} KB`);

  console.log('\n🎨 SVG Images:');
  breakdown.svg.sort((a, b) => b.size - a.size).forEach(({ file, size }) => {
    console.log(`   ${file.padEnd(30)} ${size.toString().padStart(8)} KB`);
  });
  const svgTotal = breakdown.svg.reduce((sum, img) => sum + img.size, 0);
  console.log(`   ${'TOTAL'.padEnd(30)} ${svgTotal.toFixed(2).padStart(8)} KB`);

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📈 Summary:');
  console.log(`   Total Images: ${imageFiles.length}`);
  console.log(`   Total Size: ${totalSize.toFixed(2)} KB (${(totalSize / 1024).toFixed(2)} MB)`);
  console.log(`   PNG Files: ${breakdown.png.length} (${pngTotal.toFixed(2)} KB)`);
  console.log(`   JPG Files: ${breakdown.jpg.length} (${jpgTotal.toFixed(2)} KB)`);
  console.log(`   SVG Files: ${breakdown.svg.length} (${svgTotal.toFixed(2)} KB)`);

  // Optimization potential
  const optimizableSize = pngTotal + jpgTotal;
  const estimatedAfter = optimizableSize * 0.3; // Assume 70% reduction
  const savings = optimizableSize - estimatedAfter;

  console.log('\n💡 Cloudinary Optimization Potential:');
  console.log(`   Current size (PNG+JPG): ${optimizableSize.toFixed(2)} KB`);
  console.log(`   Estimated after optimization: ${estimatedAfter.toFixed(2)} KB`);
  console.log(`   Expected savings: ${savings.toFixed(2)} KB (${((savings/optimizableSize)*100).toFixed(0)}%)`);
  console.log(`   SVG files: ${svgTotal.toFixed(2)} KB (minimal optimization needed)`);

  console.log('\n✨ Benefits after Cloudinary migration:');
  console.log('   • Automatic WebP/AVIF format conversion');
  console.log('   • Responsive image serving');
  console.log('   • CDN delivery (faster loading)');
  console.log('   • Lazy loading support');
  console.log('   • No manual image optimization needed\n');
};

analyzeImages();
