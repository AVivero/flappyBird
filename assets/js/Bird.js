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
    this.score = 0;

    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 32) {
            self.speedY = 15;
        }
    });

}

Bird.prototype.update = function () {
    this.y -= this.speedY;
    this.speedY -= 1;
}


Bird.prototype.render = function () {
    var renderX = this.x - this.width / 2;
    var renderY = this.y - this.height / 2;
    this.ticks++;
    if (this.ticks % 5 === 0) this.lastDraw = (this.lastDraw + 1) % this.sprites.length;
    this.ctx.drawImage(this.sprites[this.lastDraw], renderX, renderY);

}