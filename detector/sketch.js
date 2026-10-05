const r = require("raylib");
const d = require("./detector.js");
const p = require("./particle.js");
const range = require("./draw.js");

function setup(width, height, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(50);

    d1 = d.createDetector(0, 50, height, 0, width / 2, 2, "coloumn");
    d2 = d.createDetector(width / 2, 50, height, width / 2, width, 4, "column");
    d3 = d.createDetector(0, width, 50, 0, height, 4, "row");

    p1 = p.createParticle(100, 50, height, "column");
    p2 = p.createParticle(250, 70, height, "column");
    p3 = p.createParticle(300, width, 20, "row");
    p4 = p.createParticle(100, width, 50, "row");
}

function update() {
    d1 = d.updateDetector(d1, p1, p2);
    d2 = d.updateDetector(d2, p1, p2);
    d3 = d.updateDetector(d3, p3, p4);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    range.draw(p1);
    range.draw(p2);
    range.draw(p3);
    range.draw(p4);

    range.draw(d3);
    range.draw(d2);
    range.draw(d1);

    r.EndDrawing();
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    update,
    draw,
    running,
    teardown,
};
