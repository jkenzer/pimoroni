const UnicornHatHD = require('./unicornhat-hd');
const unicornHatHD = new UnicornHatHD('/dev/spidev0.0');

let turkeyTimeout;

unicornHatHD.setBrightness(0.75);
unicornHatHD.clear();

let turkey = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'L', 'L', 'L', 'L', 'L', 'L', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'L', 'D', 'D', 'D', 'D', 'D', 'D', 'L', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'L', 'D', 'D', 'R', 'B', 'B', 'D', 'D', 'D', 'L', ' ', ' ', ' '],
  [' ', ' ', 'L', 'D', 'D', 'D', 'R', ' ', 'B', 'O', 'O', 'D', 'D', 'L', ' ', ' '],
  [' ', 'L', 'D', 'D', 'D', 'D', 'R', 'B', 'B', 'O', 'D', 'D', 'D', 'D', 'L', ' '],
  [' ', 'L', 'D', 'D', 'D', 'D', 'D', 'R', 'R', 'D', 'D', 'D', 'D', 'D', 'L', ' '],
  [' ', 'L', 'D', 'D', 'D', 'L', 'L', 'R', 'R', 'L', 'L', 'D', 'D', 'D', 'L', ' '],
  [' ', 'L', 'D', 'D', 'L', 'D', 'D', 'L', 'R', 'D', 'D', 'L', 'D', 'D', 'L', ' '],
  [' ', 'L', 'D', 'L', 'D', 'D', 'L', 'L', 'L', 'L', 'D', 'D', 'L', 'D', 'L', ' '],
  [' ', ' ', ' ', 'D', 'D', 'M', 'L', 'L', 'L', 'L', 'M', 'D', 'D', ' ', ' ', ' '],
  [' ', ' ', ' ', 'D', 'D', 'M', 'M', 'L', 'L', 'M', 'M', 'D', 'D', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'O', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'O', 'O', 'O', 'O', 'O', 'O', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];


function drawTurkey() {

  for (let row = 0; row < turkey.length; row++) {
    const pixels = turkey[row];
    for (let p = 0; p < pixels.length; p++) {
      if (pixels[p] == "L") {
        // Light Brown rgb(164,138,120)
        // Dark Brown rgb(72,49,43)
        unicornHatHD.setPixel(row, p, 204, 157, 105);
      }
      if (pixels[p] == "D") {
        // Light Brown rgb(204,157,105)
        unicornHatHD.setPixel(row, p, 126, 77, 36);
      }
      if (pixels[p] == "R") {
        // Red rgb(206,16,17)
        unicornHatHD.setPixel(row, p, 206, 16, 17);
      }
      if (pixels[p] == "O") {
        // Orange rgb(237,73,28)
        unicornHatHD.setPixel(row, p, 237, 73, 28);
      }
      if (pixels[p] == "B") {
        // Blue rgb(54,168,227)
        unicornHatHD.setPixel(row, p, 54, 168, 227);
      }
      if (pixels[p] == "M") {
        // Medium Brown rgb(177,127,74)
        unicornHatHD.setPixel(row, p, 177, 127, 74);
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
  turkeyTimeout = setTimeout(() => {
    turkey[2].reverse();
    turkey[3].reverse();
    turkey[4].reverse();
    drawTurkey();
  }, 950)
}
drawTurkey();