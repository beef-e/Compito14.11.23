let x = 0;
let y = 0;
let w = 600;
let h = 600;
let increment = w / 20;
let randomico;

function setup() {
	createCanvas(w, h);
	background(0, 0, 0);
}

function draw() {
	//line(0, 0, increment, increment);

	for (let j = 0; j < 20; j++) {
		for (let i = 0; i < 20; i++) {
			randomico = random(0, 2);
			randomico = parseInt(randomico);
			if (randomico % 2 == 0) {
				///0=sinistra destra
				disegnaLineaDestra();
				//disegnaLineaSinistra();
			} else {
				//1=destra sinistra
				disegnaLineaSinistra();
			}
		}

		x = 0;
		y = y + increment;
	}

	/*for (let i = 0; i < 20; i++) {
		let randomico = random(0, 2);
		randomico = parseInt(randomico);
		if (randomico === 0) {
			///0=sinistra destra
			disegnaLineaDestra();
		} else {
			disegnaLineaSinistra();
		}
	}*/
}

function disegnaLineaDestra() {
	stroke(255, 255, 255);

	line(x, y, x + increment, y + increment);
	x = x + increment;
}

function disegnaLineaSinistra() {
	stroke(255, 255, 255);

	line(x + increment, y, x, y + increment);
	x = x + increment;
}
