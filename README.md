# Node.js image tools

Various tools (one for now, surely there will be more) for image manipulation in Node.js

Tested using v20 LTS

## Setup

Run `npm install`

## Image cropper

Crop `.png`, `.jpg`, `.webp` images. Others can probably work too, just update the extensions inside `image-cropper/crop-images.js`.

Usage guide:

- Place your images inside `image-cropper/images-to-crop` folder
- Update parameters inside `image-cropper/params.js`
- Run `npm run crop-images`
- Take cropped images from `image-cropper/cropped-images` folder
