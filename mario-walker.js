const jimp = require('jimp');
const UnicornHatHD = require('./unicornhat-hd');
const unicornHatHD = new UnicornHatHD('/dev/spidev0.0');
const marios = [
  'mario-1.png',
  'mario-2.png',
  'mario-3.png',
  'mario-4.png',
  'mario-5.png',
]
unicornHatHD.setBrightness(0.95);
unicornHatHD.clear();

let i = 0;

function drawMario(mario) {

  jimp.read(mario, (err, image) => {
    if (err) throw err;
    // const sampleW = image.getWidth() / 16;
    // const sampleH = image.getHeight() / 16;
    for (let x = 0; x <= 15; x++) {
      for (let y = 0; y <= 15; y++) {
        const color = image.getPixelColor(x, y);
        const rgb = jimp.intToRGBA(color);
        unicornHatHD.setPixel(x, y, rgb.r, rgb.g, rgb.b);
      }

    }
    unicornHatHD.show(true, true);
  });
  if (i < marios.length - 1) {
    i += 1;
  } else {
    i = 0;
  }
  setTimeout(() => {
    drawMario(marios[i]);
  }, 200)
}
drawMario(marios[i]);
