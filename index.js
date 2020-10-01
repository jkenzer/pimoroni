var UnicornHatHD = require('./unicornhat-hd');
var unicornHatHD = new UnicornHatHD('/dev/spidev0.0');

//for(let x = 0 ; x<16 ; x++){
//for(let y = 0 ; y<16 ; y++){
//if(x%2 == 0){
//unicornHatHD.setPixel(x, y, 255, 0, 0);
//}else{
//unicornHatHD.setPixel(x, y, 255, 255, 0);
//}
//}
//unicornHatHD.setPixel(1, 0, 0, 255, 0);
//unicornHatHD.setPixel(2, 0, 0, 0, 255);
//}
unicornHatHD.setBrightness(0.25);
unicornHatHD.clear();

var flipHorizontal = false;
var flipVertical = false;
let y = 0;
let g = 5;

function draw(i) {
	if (i < 16) {
		// console.log(i, y);
		unicornHatHD.setPixel(i, y, 255, g, 50);
	} else {
		i = -1;
		y += 1;
		if (y > 15) {
			y = 0;
			g += 100;
		}
		if (g > 255) {
			g = 5;
		}
	}
	unicornHatHD.show(flipHorizontal, flipVertical);
	setTimeout(() => {
		draw(++i);
	}, 3)
}

draw(0);