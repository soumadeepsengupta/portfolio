import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

// Test Cloudinary connection
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET,
});

console.log('Testing Cloudinary connection...\n');
console.log('Cloud Name:', process.env.VITE_CLOUDINARY_CLOUD_NAME);
console.log('API Key:', process.env.VITE_CLOUDINARY_API_KEY);
console.log('API Secret:', process.env.VITE_CLOUDINARY_API_SECRET ? '***' + process.env.VITE_CLOUDINARY_API_SECRET.slice(-4) : 'NOT SET');

// Test uploading a small SVG file
const testUpload = async () => {
  try {
    console.log('\nAttempting test upload...');
    const result = await cloudinary.uploader.upload('./public/arrow.svg', {
      folder: 'portfolio',
      public_id: 'test-upload',
    });
    
    console.log('✅ SUCCESS! Connection is working!');
    console.log('Test image URL:', result.secure_url);
    console.log('\nYou can now run: npm run upload:cloudinary');
    
    // Clean up test image
    await cloudinary.uploader.destroy('portfolio/test-upload');
    console.log('Test image cleaned up.');
  } catch (error) {
    console.error('❌ FAILED:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Double-check your credentials at: https://console.cloudinary.com/');
    console.log('2. Make sure API Secret is copied correctly (no spaces)');
    console.log('3. Verify Cloud Name matches your API Key');
  }
};

testUpload();
