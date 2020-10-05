const UnicornHatHD = require('./unicornhat-hd');
const unicornHatHD = new UnicornHatHD('/dev/spidev0.0');

unicornHatHD.setBrightness(0.95);
unicornHatHD.clear();

let pumpkin = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // top
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', 'G', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' ', ' '],
  [' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' '],
  [' ', ' ', 'O', 'O', 'O', 'Y', 'Y', 'O', 'O', 'O', 'O', 'Y', 'Y', 'O', 'O', ' '],
  [' ', ' ', 'O', 'O', 'Y', 'Y', 'Y', 'O', 'O', 'O', 'Y', 'Y', 'Y', 'O', 'O', ' '],
  [' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' '],
  [' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' '],
  [' ', ' ', 'O', 'Y', 'Y', 'Y', 'O', 'Y', 'Y', 'O', 'O', 'Y', 'Y', 'Y', 'O', ' '],
  [' ', ' ', 'O', 'O', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'O', 'O', ' '],
  [' ', ' ', ' ', 'O', 'O', 'Y', 'O', 'O', 'Y', 'Y', 'O', 'Y', 'O', 'O', ' ', ' '],
  [' ', ' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' ', ' ', ' '], // bottom
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

for (let row = 0; row < pumpkin.length; row++) {
  const pixels = pumpkin[row];
  for (let p = 0; p < pixels.length; p++) {
    if (p == "G") {
      unicornHatHD.setPixel(row, pixel, 0, 128, 0);
    }
    if (p == "O") {
      unicornHatHD.setPixel(row, pixel, 255, 165, 0);
    }
    if (p == "Y") {
      unicornHatHD.setPixel(row, pixel, 255, 255, 0);
    }

  }
}
unicornHatHD.show(true, true);
