import fs from 'fs';
import sharp from 'sharp';
import { MAX_HEIGHT, MAX_WIDTH } from './params.js';

const inputFolder = './images-to-crop';
const outputFolder = './cropped-images';

fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  files.forEach((file) => {
    if (
      file.endsWith('.jpg') ||
      file.endsWith('.png') ||
      file.endsWith('.webp')
    ) {
      // Adjust file extensions as needed
      const inputPath = `${inputFolder}/${file}`;
      const outputPath = `${outputFolder}/${file}`;

      sharp(inputPath)
        .metadata()
        .then((metadata) => {
          if (metadata.height > MAX_HEIGHT || metadata.width > MAX_WIDTH) {
            sharp(inputPath)
              .extract({
                left: 0,
                top: 0,
                width: MAX_WIDTH,
                height: MAX_HEIGHT,
              })
              .toFile(outputPath, (err) => {
                if (err) {
                  console.error(`Error processing ${file}:`, err);
                } else {
                  console.log(`${file} cropped and saved as ${outputPath}`);
                }
              });
          } else {
            console.log(`${file} is already below the maximum height`);
          }
        })
        .catch((err) => {
          console.error(`Error getting metadata for ${file}:`, err);
        });
    }
  });
});
