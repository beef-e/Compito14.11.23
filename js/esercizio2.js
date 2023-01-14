let l = 100;
let w = l * 8;
let h = l * 8;
let x = 0;
let y = 0;

//sqaure(x, y, lato)

function setup() {
	createCanvas(w, h);
}

function draw() {
	let b = color(0, 0, 0);
	let whi = color(255, 255, 255);

	for (let i = 0; i < 8; i++) {
		disegnaBlacks(b);
		disegnaWhites(whi);
	}

	y = y + l;

	for (let i = 0; i < 8; i++) {
		disegnaWhites(whi);
		disegnaBlacks(b);
	}

	/*while (y < 800) {
		for (let i = 0; i < 8; i++) {
			disegnaBlacks(b);
			disegnaWhites(whi);
		}

		y = y + l;
		console.log(y);

		for (let i = 0; i < 8; i++) {
			disegnaWhites(whi);
			disegnaBlacks(b);
		}

		y = y + l;
		console.log(y);
	}*/
}

function disegnaBlacks(b) {
	fill(b);
	square(x, y, l);
	x = x + l;
}

function disegnaWhites(whi) {
	fill(whi);
	square(x, y, l);
	x = x + l;
}
