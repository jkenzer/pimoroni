const UnicornHatHD = require('./unicornhat-hd');
const unicornHatHD = new UnicornHatHD('/dev/spidev0.0');

unicornHatHD.setBrightness(0.95);
unicornHatHD.clear();

let pumpkin = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // top
  [' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', 'G', 'G', ' ', ' ', ' ', ' ', ' ', ' '],
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

let ghost = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'R', 'R', 'R', 'R', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', ' ', ' ', ' '],
  [' ', ' ', 'R', 'R', 'R', 'W', 'W', 'R', 'R', 'R', 'R', 'W', 'W', 'R', ' ', ' '],
  [' ', ' ', 'R', 'R', 'W', 'W', 'W', 'W', 'R', 'R', 'W', 'W', 'W', 'W', ' ', ' '],
  [' ', ' ', 'R', 'R', 'W', 'W', 'B', 'B', 'R', 'R', 'W', 'W', 'B', 'B', ' ', ' '],
  [' ', 'R', 'R', 'R', 'W', 'W', 'B', 'B', 'R', 'R', 'W', 'W', 'B', 'B', 'R', ' '],
  [' ', 'R', 'R', 'R', 'R', 'W', 'W', 'R', 'R', 'R', 'R', 'W', 'W', 'R', 'R', ' '],
  [' ', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', ' '],
  [' ', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', ' '],
  [' ', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', ' '],
  [' ', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', ' '],
  [' ', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', ' '],
  [' ', 'R', 'R', ' ', 'R', 'R', 'R', ' ', ' ', 'R', 'R', 'R', ' ', 'R', 'R', ' '],
  [' ', 'R', ' ', ' ', ' ', 'R', 'R', ' ', ' ', 'R', 'R', ' ', ' ', ' ', 'R', ' '],
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

  unicornHatHD.rotate();
  // unicornHatHD.rotate();
  // unicornHatHD.rotate();
  unicornHatHD.show(true, false);
  setTimeout(() => {
    pumpkin[6].reverse();
    pumpkin[7].reverse();
    pumpkin[10].reverse();
    pumpkin[11].reverse();
    drawPumpkin();
  }, 550)
}
function drawGhost() {

  for (let row = 0; row < ghost.length; row++) {
    const pixels = ghost[row];
    for (let p = 0; p < pixels.length; p++) {
      if (pixels[p] == "R") {
        unicornHatHD.setPixel(row, p, 255, 0, 0);
      }
      if (pixels[p] == "W") {
        unicornHatHD.setPixel(row, p, 255, 255, 255);
      }
      if (pixels[p] == " " || pixels[p] == "B") {
        unicornHatHD.setPixel(row, p, 0, 0, 0);
      }
    }
  }

  unicornHatHD.rotate();
  // unicornHatHD.rotate();
  // unicornHatHD.rotate();
  unicornHatHD.show(true, false);
  setTimeout(() => {
    ghost[3].reverse();
    ghost[4].reverse();
    ghost[5].reverse();
    ghost[6].reverse();
    ghost[7].reverse();
    ghost[8].reverse();
    drawGhost();
  }, 550)
}
// drawPumpkin();
drawGhost();
