const UnicornHatHD = require('./unicornhat-hd');
const unicornHatHD = new UnicornHatHD('/dev/spidev0.0');

unicornHatHD.setBrightness(0.95);
unicornHatHD.clear();

let pumpkin = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // top
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', 'G', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' ', ' '],
  [' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' '],
  [' ', 'O', 'O', 'O', 'O', 'Y', 'Y', 'O', 'O', 'O', 'O', 'Y', 'Y', 'O', 'O', ' '],
  [' ', 'O', 'O', 'O', 'Y', 'Y', 'Y', 'O', 'O', 'O', 'Y', 'Y', 'Y', 'O', 'O', ' '],
  [' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' '],
  [' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' '],
  [' ', 'O', 'O', 'Y', 'Y', 'Y', 'O', 'Y', 'Y', 'O', 'O', 'Y', 'Y', 'Y', 'O', ' '],
  [' ', 'O', 'O', 'O', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'O', 'O', ' '],
  [' ', ' ', 'O', 'O', 'O', 'Y', 'O', 'O', 'Y', 'Y', 'O', 'Y', 'O', 'O', ' ', ' '],
  [' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' ', ' ', ' '], // bottom
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

function drawPumpkin() {

  for (let row = 0; row < pumpkin.length; row++) {
    const pixels = pumpkin[row];
    for (let p = 0; p < pixels.length; p++) {
      if (pixels[p] == "G") {
        unicornHatHD.setPixel(row, p, 0, 128, 0);
      }
      if (pixels[p] == "O") {
        unicornHatHD.setPixel(row, p, 204, 136, 0);
      }
      if (pixels[p] == "Y") {
        unicornHatHD.setPixel(row, p, 0, 0, 0);
      }
      if (pixels[p] == " ") {
        unicornHatHD.setPixel(row, p, 0, 0, 0);
      }
    }
  }
  unicornHatHD.show(true, false);
  setTimeout(() => {
    pumpkin[6].reverse();
    pumpkin[7].reverse();
    pumpkin[10].reverse();
    pumpkin[11].reverse();
    drawPumpkin();
  }, 550)
}
drawPumpkin();
