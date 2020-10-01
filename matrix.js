var UnicornHatHD = require('./unicornhat-hd');
var unicornHatHD = new UnicornHatHD('/dev/spidev0.0');


unicornHatHD.setBrightness(0.95);
unicornHatHD.clear();

let wrd_rgb = [
	[154, 173, 255],
	[0, 255, 0],
	[0, 235, 0],
	[0, 220, 0],
	[0, 185, 0],
	[0, 165, 0],
	[0, 128, 0],
	[0, 0, 0],
	[154, 173, 255],
	[0, 145, 0],
	[0, 125, 0],
	[0, 100, 0],
	[0, 80, 0],
	[0, 60, 0],
	[0, 40, 0],
	[0, 0, 0]
];

let bpp = [
	[Math.floor(Math.random() * 16), 15]
];
let y;

function draw(i) {
	for (let i in bpp) {
		y = bpp[i][1];
		for (let rgb in wrd_rgb) {
			const color = wrd_rgb[rgb];
			if (y >= 0 && y <= 15) {
				unicornHatHD.setPixel(bpp[i][0], y, color[0], color[1], color[2]);
			}
			y += 1;
		}
		bpp[i][1] -= 1;
	}
	unicornHatHD.show(false, false);

	if (i % 5 == 0 || i % 7 == 0) {
		bpp.push([Math.floor(Math.random() * 16), 15])
	}

	while (bpp.length > 100) {
		bpp.shift();
	}

	setTimeout(() => {
		draw(++i);
	}, 100)
}

draw(0);