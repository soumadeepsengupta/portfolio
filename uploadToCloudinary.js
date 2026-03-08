import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
});

const publicDir = path.join(__dirname, 'public');

// Get all image files from public directory
const getImageFiles = (dir) => {
  const files = fs.readdirSync(dir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.svg', '.webp'].includes(ext);
  });
};

// Upload images to Cloudinary with optimization
const uploadImages = async () => {
  const imageFiles = getImageFiles(publicDir);
  console.log(`Found ${imageFiles.length} images to upload\n`);

  const results = {};

  for (const file of imageFiles) {
    const filePath = path.join(publicDir, file);
    const fileName = path.parse(file).name;
    const fileExt = path.extname(file).toLowerCase();

    try {
      console.log(`Uploading: ${file}...`);

      const uploadOptions = {
        folder: 'portfolio',
        public_id: fileName,
        resource_type: 'auto',
      };

      // Apply optimization for raster images (not SVG)
      if (['.png', '.jpg', '.jpeg'].includes(fileExt)) {
        uploadOptions.quality = 'auto:best'; // Automatic quality optimization
        uploadOptions.fetch_format = 'auto'; // Automatic format selection (WebP when supported)
      }

      const result = await cloudinary.uploader.upload(filePath, uploadOptions);
      
      results[file] = result.secure_url;
      console.log(`✓ Uploaded: ${file}`);
      console.log(`  URL: ${result.secure_url}\n`);
    } catch (error) {
      console.error(`✗ Failed to upload ${file}:`, error.message);
    }
  }

  // Save results to a JSON file for reference
  fs.writeFileSync(
    path.join(__dirname, 'cloudinary-urls.json'),
    JSON.stringify(results, null, 2)
  );

  console.log('\n✓ All uploads complete!');
  console.log('URLs saved to: cloudinary-urls.json');
  console.log('\nNext steps:');
  console.log('1. Update your image paths in the code to use Cloudinary URLs');
  console.log('2. Consider creating a cloudinaryImages.js config file for centralized URL management');
};

uploadImages();
