let l = 100;
let w = l * 8;
let h = l * 8;
x = 0;
y = 0;

//sqaure(x, y, lato)

function setup() {
	createCanvas(w, h);
}

function draw() {
	let b = color(0, 0, 0);
	let whi = color(255, 255, 255);

	while (y < 800) {
		for (let i = 0; i < 8; i++) {
			disegnaBlacks(b);
			disegnaWhites(whi);
		}

		y = y + l;
		x = 0;

		for (let i = 0; i < 8; i++) {
			disegnaWhites(whi);
			disegnaBlacks(b);
		}

		y = y + l;
		x = 0;
	}
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
