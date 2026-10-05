const r = require("raylib");

function draw(field) {
    let fieldX = field.matrix === "row" ? 0 : field.start;
    let fieldY = field.matrix === "row" ? field.start : 0;
    r.DrawRectangle(fieldX, fieldY, field.width, field.height, field.color);
}
module.exports = {
    draw,
};
