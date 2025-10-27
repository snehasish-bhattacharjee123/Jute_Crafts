#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

// Check if sharp is available, otherwise use a basic approach
let useSharp = false;
try {
  require.resolve('sharp');
  useSharp = true;
} catch (e) {
  console.log('Sharp not available, will attempt basic image copy');
}

const logoUrl = 'https://cdn.builder.io/api/v1/image/assets%2F35d7f5b69992490292f4b36d38cd824c%2Fd357ad71a8e5448d8d0de7273b9706c7';
const publicDir = path.join(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const downloadAndProcessImage = () => {
  https.get(logoUrl, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download image: ${response.statusCode}`);
      process.exit(1);
    }

    const chunks = [];
    response.on('data', (chunk) => chunks.push(chunk));
    response.on('end', () => {
      const buffer = Buffer.concat(chunks);

      if (useSharp) {
        // Use sharp for proper resizing
        const sharp = require('sharp');

        Promise.all([
          sharp(buffer)
            .resize(192, 192, { fit: 'cover', position: 'center' })
            .png()
            .toFile(path.join(publicDir, 'logo192.png')),
          sharp(buffer)
            .resize(512, 512, { fit: 'cover', position: 'center' })
            .png()
            .toFile(path.join(publicDir, 'logo512.png')),
        ])
          .then(() => {
            console.log('✓ Successfully replaced logo192.png and logo512.png with MKT Rugs logo');
          })
          .catch((err) => {
            console.error('Error processing images:', err);
            process.exit(1);
          });
      } else {
        // Fallback: just copy the buffer as-is
        fs.writeFileSync(path.join(publicDir, 'logo192.png'), buffer);
        fs.writeFileSync(path.join(publicDir, 'logo512.png'), buffer);
        console.log('✓ Logo files updated (resizing not available, copied as-is)');
      }
    });
  }).on('error', (err) => {
    console.error('Error downloading image:', err);
    process.exit(1);
  });
};

downloadAndProcessImage();
