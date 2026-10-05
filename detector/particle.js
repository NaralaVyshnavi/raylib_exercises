const r = require("raylib");
function createParticle(start, width, height, matrix) {
    color = r.BLUE;
    return {
        start,
        width,
        height,
        matrix,
        color,
    };
}
module.exports = {
    createParticle,
};
