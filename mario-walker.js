const jimp = require('jimp');
const UnicornHatHD = require('./unicornhat-hd');
const unicornHatHD = new UnicornHatHD('/dev/spidev0.0');

unicornHatHD.setBrightness(0.95);
unicornHatHD.clear();

jimp.read('mario.jpg', (err, image) => {
  if (err) throw err;
  const sampleW = image.getWidth() / 16;
  const sampleH = image.getHeight() / 16;
  for (let x = 0; x <= 15; x++) {
    for (let y = 0; y <= 15; y++) {
      const color = image.getPixelColor(x * sampleW, y * sampleH);
      const rgb = jimp.intToRGBA(color);
      unicornHatHD.setPixel(x, y, rgb.r, rgb.g, rgb.b);
    }

  }
  unicornHatHD.show(true, true);
});
