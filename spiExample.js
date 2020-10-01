let SPI = require('pi-spi');

let spi = SPI.initialize("/dev/spidev0.0");

var buffer = new Buffer(16 * 16 * 3);
let rgb = 1;

function draw(i) {

  rgb += 10;
  if (rgb > 255) {
    rgb = 1;
  }
  for (var y = 0; y < 16; y++) {
    for (var x = 0; x < 16; x++) {
      buffer[y * 16 * 3 + x * 3 + 0] = rgb * 0.5;
      buffer[y * 16 * 3 + x * 3 + 1] = rgb * 0.5;
      buffer[y * 16 * 3 + x * 3 + 2] = rgb * 0.5;
    }
  }
  spi.write(Buffer.concat([new Buffer([0x72]), buffer]), function (err) {
    if (err) {
      throw 'Something went wrong!';
    }
  });

  setTimeout(() => {
    draw(++i);
  }, 10)
}

draw(0);