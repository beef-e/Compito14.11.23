w = 600;
h = 600;
l = 10;
x = w / 2;
x = x - l / 2;
y = h / 2;
y = y - l / 2;

function setup() {
	createCanvas(w, h);
	background(0, 0, 0);
}

function draw() {
	createCanvas(w, h);
	background(0, 0, 0);
	square(x, y, l);

	while (l < 200) {
		l = l + 1;
	}
	while (l < 10) {}

	if (l < 200) {
		l = l + 1;
	}

	if (l >= 200) {
		while (l > 10) {
			l = l - 1;
			square(x, y, l);
		}
	}
}
