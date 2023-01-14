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
	background(0, 0, 0);
	square(x, y, l);

	if (l < 200) {
		l = l + 1;
	}

	if (l >= 200) {
		while (l > 10) {
			l = l - 1;
		}
	}

	clear();
}
