const r = require("raylib");
function createParticle(start, width, height) {
    color = r.BLUE;
    return {
        start,
        width,
        height,
        color,
    };
}
function drawVerticleParticle(particle) {
    r.DrawRectangle(particle.start, 0, particle.width, particle.height, r.BLUE);
}
function drawHorizontalParticle(particle) {
    r.DrawRectangle(0, particle.start, particle.width, particle.height, r.BLUE);
}
module.exports = {
    createParticle,
    drawHorizontalParticle,
    drawVerticleParticle,
};
