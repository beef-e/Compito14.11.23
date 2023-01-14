sWeight = 35;
let d = 600 - sWeight;
let x = d / 2 + sWeight / 2;
let y = d / 2 + sWeight / 2;

function setup() {
	createCanvas(600, 600);
	background(120, 120, 120);

	strokeWeight(sWeight);

	for (let i = 0; i < 4; i++) {
		stroke(255, 255, 255);
		circle(x, y, d);

		d = d - sWeight * 2;

		stroke(0, 0, 0);
		circle(x, y, d);

		d = d - sWeight * 2;
	}

	fill(232, 63, 63);
	stroke(232, 63, 63);
	circle(x, y, d);
	console.log('il valore del diametro è: ' + d);
}

function draw() {}
