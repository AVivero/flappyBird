/**
 * Created by Spectre on 2/9/2017.
 */
window.onload = function () {

    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = 681;
    var score = 0;

    const ctx = canvas.getContext('2d');


    const environment = new Environment(canvas, ctx);
    const bird = new Bird(250, 250, ctx);

    gameLoop();

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (bird.y - bird.speedY >= 38 && bird.y - bird.speedY <= 670) {
            score += Math.round(0.01 * 100);
            document.getElementById('score').innerHTML = "score: " + score;
            environment.update();
            environment.render();
            bird.update();
            bird.render();
            window.requestAnimationFrame(gameLoop);
        }
        else {
            console.log('GAME OVER');
            gameOver(score);
        }
    }
}

function gameOver(score) {
    $('body')[0].innerHTML = `<div id="gameOver"> <h2>GAME OVER</h2> <p>Score: ${score}</p></div>`;
}


