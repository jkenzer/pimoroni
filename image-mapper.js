const jimp = require('jimp');
const UnicornHatHD = require('./unicornhat-hd');
const unicornHatHD = new UnicornHatHD('/dev/spidev0.0');

unicornHatHD.setBrightness(0.95);
unicornHatHD.clear();

jimp.read('16x16lock.png', (err, image) => {
  if (err) throw err;
  for (let x = 0; x < image.getWidth(); x++) {
    for (let y = 0; y < image.getHeight(); y++) {
      const color = image.getPixelColor(x, y);
      const rgb = jimp.intToRGBA(color);
      unicornHatHD.setPixel(x, y, rgb.r, rgb.g, rgb.b);
    }

  }
  unicornHatHD.show(true, false);
});
