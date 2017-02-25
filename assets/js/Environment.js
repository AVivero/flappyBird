/**
 * Created by Spectre on 2/13/2017.
 */
var Environment = function (canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.backgroundPosition = 0;
    this.backgroundSpeed = -2;
    this.backgroundWidth = 575;
//this.foregraoundPosition = 0;
    this.backgroundImage = document.getElementById('background');
}

Environment.prototype.update = function () {
    this.backgroundPosition += this.backgroundSpeed;
    if (this.backgroundPosition < -this.backgroundWidth)
        this.backgroundPosition = 0;
}

Environment.prototype.render = function () {
    for (var i = 0; i <= this.canvas.width / this.backgroundWidth + 1; i++)
        this.ctx.drawImage(this.backgroundImage, this.backgroundPosition + i * this.backgroundWidth, 0);
}