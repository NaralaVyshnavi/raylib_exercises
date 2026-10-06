const r = require("raylib");
function createParticle(start, width, height, matrix) {
    return {
        start,
        width,
        height,
        matrix,
        color: r.BLUE,
    };
}
module.exports = {
    createParticle,
};
