var mario = document.getElementById('mario');
var coin = document.getElementById('coin');

document.addEventListener('keydown', function(event) {
	if (event.code == 'ArrowRight') {
		mario.style.transform = 'scaleX(1)';
		mario.style.left = parseInt(mario.style.left || 0) + 10 + 'px';
		checkCollision();
	}
	else if (event.code == 'ArrowLeft') {
		mario.style.transform = 'scaleX(-1)';
		mario.style.left = parseInt(mario.style.left || 0) - 10 + 'px';
		checkCollision();
	}
});

function checkCollision() {
	var marioRect = mario.getBoundingClientRect();
	var coinRect = coin.getBoundingClientRect();
	if (marioRect.left + marioRect.width >= coinRect.left &&
		marioRect.left <= coinRect.left + coinRect.width &&
		marioRect.top + marioRect.height >= coinRect.top &&
		marioRect.top <= coinRect.top + coinRect.height) {
		coin.style.display = 'none';
		alert('You won!');
	}
}
