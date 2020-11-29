const UnicornHatHD = require('./unicornhat-hd');
const unicornHatHD = new UnicornHatHD('/dev/spidev0.0');

let treeTimeout;
let counter = 0;


unicornHatHD.setBrightness(0.75);
unicornHatHD.clear();

let tree = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'Y', 'L', 'L', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'L', 'G', 'G', 'R', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'G', 'O', 'B', 'G', 'G', 'G', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'G', 'R', 'G', 'G', 'G', 'G', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'G', 'G', 'G', 'G', 'G', 'R', 'O', 'G', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'G', 'G', 'O', 'G', 'G', 'G', 'G', 'G', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'G', 'G', 'L', 'G', 'G', 'O', 'L', 'G', 'G', 'G', ' ', ' ', ' '],
  [' ', ' ', ' ', 'G', 'R', 'G', 'G', 'G', 'R', 'G', 'R', 'G', 'G', ' ', ' ', ' '],
  [' ', ' ', 'G', 'G', 'O', 'G', 'G', 'G', 'G', 'L', 'G', 'L', 'G', 'R', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'B', 'B', 'B', 'B', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];


function drawTree() {

  for (let row = 0; row < tree.length; row++) {
    const pixels = tree[row];
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
        unicornHatHD.setPixel(row, p, 239, 156, 67);
      }
      if (pixels[p] == "B") {
        // Blue rgb(54,168,227)
        unicornHatHD.setPixel(row, p, 95,61,26);
      }
      if (pixels[p] == "L") {
        unicornHatHD.setPixel(row, p, 17,132,214);
      }
      if (pixels[p] == "M") {
        // Medium Brown rgb(177,127,74)
        unicornHatHD.setPixel(row, p, 177, 127, 74);
      }
      if (pixels[p] == "Y") {
        // Medium Brown rgb(177,127,74)
        unicornHatHD.setPixel(row, p, 248,233,68);
      }
      if (pixels[p] == "G") {
        // Medium Brown rgb(177,127,74)
        unicornHatHD.setPixel(row, p, 87,157,68);
      }
      if (pixels[p] == " ") {
        unicornHatHD.setPixel(row, p, 0, 0, 0);
      }
    }
  }

  unicornHatHD.rotate();
  // unicornHatHD.rotate();
  // unicornHatHD.rotate();
  unicornHatHD.show(true, true);
  treeTimeout = setTimeout(() => {
    if (counter % 2 === 0) {
      // tree[1][7] = ' ';
      // tree[1][8] = ' ';
      // tree[2][6] = ' ';
      tree[2][7] = ' ';
      tree[2][8] = ' ';
      // tree[2][9] = ' ';
      // tree[3][7] = ' ';
      // tree[3][8] = ' ';
    } else {
      // tree[1][7] = 'Y';
      // tree[1][8] = 'Y';
      // tree[2][6] = 'Y';
      tree[2][7] = 'L';
      tree[2][8] = 'L';
      // tree[2][9] = 'Y';
      // tree[3][7] = 'Y';
      // tree[3][8] = 'Y';
    }
    counter += 1;
    drawTree();
  }, 950)
}
drawTree();