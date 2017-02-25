/**
 * Created by Spectre on 2/9/2017.
 */
window.onload = function () {

    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = 681;

    const ctx = canvas.getContext('2d');


    const environment = new Environment(canvas, ctx);
    const bird = new Bird(250, 250, ctx);

    gameLoop();

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        environment.update();
        environment.render();
        bird.update();
        bird.render();
        window.requestAnimationFrame(gameLoop);
    }
}


