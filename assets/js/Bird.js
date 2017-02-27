/**
 * Created by Spectre on 2/13/2017.
 */
const Bird = function (x, y, ctx) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speedY = 0;
    this.width = 144;
    this.height = 95;
    this.sprites = [document.getElementById('bird1'), document.getElementById('bird2'), document.getElementById('bird3'), document.getElementById('bird4')]
    this.lastDraw = 0;
    this.ticks = 0;
    var self = this;


    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 32) {
            self.speedY = 15;
        }
    });


}

Bird.prototype.update = function (pipes, score) {
    this.y -= this.speedY;
    this.speedY -= 1;
    if (this.detectCollisions(pipes)) {
        gameOver(score);
    }
}


Bird.prototype.render = function () {
    var renderX = this.x - this.width / 2;
    var renderY = this.y - this.height / 2;
    this.ticks++;
    if (this.ticks % 5 === 0) this.lastDraw = (this.lastDraw + 1) % this.sprites.length;
    this.ctx.drawImage(this.sprites[this.lastDraw], renderX, renderY);

}

Bird.prototype.detectCollisions = function (pipes) {
    for (var i = 0; i < pipes.length; i++) {
        let e = pipes[i];
        let highPipe = e.ypos <= 0;
        let x0 = e.xpos, x1 = e.xpos + e.width;
        let alpha2 = this.x + 44;
        let beta2 = this.y;
        if (highPipe) {
            let y0 = e.ypos + e.length;
            let alpha = this.x;
            let beta = this.y - this.height / 2;
            if (alpha > x0 && alpha < x1 && beta < y0 ||
                alpha2 > x0 && alpha2 < x1 && beta2 < y0) {
                return true;
            }
        }
        else {
            let y2 = e.ypos;
            let a = this.x;
            let b = this.y + this.height / 2;
            if (a > x0 && a < x1 && b > y2 ||
                alpha2 > x0 && alpha2 < x1 && beta2 > y2) {
                return true;
            }
        }
    }
    return false;
};