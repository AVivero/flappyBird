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

    const pipes = [];
    let pipeSet = generateRandomPipes(ctx, canvas.width, canvas.height);
    pipes.push(pipeSet.top, pipeSet.bottom);
    setInterval(function () {
        let pipeSet = generateRandomPipes(ctx, canvas.width, canvas.height);
        pipes.push(pipeSet.top, pipeSet.bottom);
    }, 2600);

    gameLoop();

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (bird.y - bird.speedY >= 38 && bird.y - bird.speedY <= 670) {
            score += Math.round(0.01 * 100);
            document.getElementById('score').innerHTML = "score: " + score;
            environment.update();
            pipes.forEach(function (pipe) {
                pipe.update();
            });
            environment.render();
            pipes.forEach(function (pipe) {
                pipe.render();
            });
            bird.update(pipes, score);
            bird.render();
            window.requestAnimationFrame(gameLoop);
        }
        else {
            gameOver(score);
        }
    }
}

function generateRandomPipes(ctx, canvasWidth, canvasHeight) {
    let lengthTop = Math.round(Math.random() * 200 + 50);
    let lengthBottom = canvasHeight - 300 - lengthTop;
    let returnVal = {};
    returnVal.top = new Pipe(canvasWidth, -5, lengthTop, 4, ctx);
    returnVal.bottom = new Pipe(canvasWidth, canvasHeight + 5 - lengthBottom, lengthBottom, 4, ctx);
    return returnVal;
}

function gameOver(score) {
    $('body')[0].innerHTML = `<div id="gameOver"> <h2>GAME OVER</h2> <p>Score: ${score}</p><h5>Press f5 to restart...</h5></div>`;
}


