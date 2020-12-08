var player, playerImg;
var ground1;
var ground2;
var enemy, enemyImg;

function preload() {
	enemyImg = loadImage("enemy.png");
	playerImg = loadImage("bird.png");
}

function setup() {
	createCanvas(600, 400);

	player = createSprite(95, 360, 30, 60);
	ground1 = createSprite(200, 400, 800, 20);
	ground2 = createSprite(-3, 400, 20, 800);
	enemy = createSprite(500, 373, 30, 30);
	enemy.shapeColor = "red";
	player.shapeColor = "orange";
	ground2.visible = false;
	enemy.addImage(enemyImg);
	enemy.scale = 0.5;

	player.addImage(playerImg);
	player.scale = 0.7;
}

function draw() {
	background(50);

	textSize(50);
	text("Pig Infection", 130, 100);
	

	if (enemy.isTouching(player)) {
		player.addImage(enemyImg);
		player.scale = 0.5;
	}


	enemy.velocityX = -7;

	if (enemy.isTouching(ground2)) {
		enemy.x = 500;
		enemy.y = 373;
	}

	if (keyDown("w") && player.y >= 350) {
		player.velocityY = -7;
	}

	if (keyDown("space") && player.y >= 350) {
		player.velocityY = -7;
	}
	player.velocityY = player.velocityY + 0.5;
	player.collide(ground1);
	drawSprites();
}