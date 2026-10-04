const r = require("raylib");
const d = require("./detector.js");
const p = require("./particle.js");

function setup(width, height, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(50);

    d1 = d.createDetector(0, 50, height, 0, width / 2, 2);
    d2 = d.createDetector(width / 2, 50, height, width / 2, width, 4);
    d3 = d.createDetector(0, width, 50, 0, height, 4);

    p1 = p.createParticle(100, 50, height);
    p2 = p.createParticle(350, 100, height);
    p3 = p.createParticle(300, width, 100);
}

function chooseDetectorColor(start1, width1, start2, width2, start3, width3) {
    return d.isOverLappingParticles(
        start1,
        width1,
        start2,
        width2,
        start3,
        width3,
    )
        ? r.RED
        : r.WHITE;
}

function chooseHorizontalDetectorColor(start1, width1, start2, width2) {
    return d.isOverLapping(start1, width1, start2, width2) ? r.RED : r.WHITE;
}

function update() {
    d1.velocity = d.isVerticleDetectorOutOfBounds(d1);
    d1.start = d.calculateDetectorPosition(d1);
    d1.color = chooseDetectorColor(
        d1.start,
        d1.width,
        p1.start,
        p1.width,
        p2.start,
        p2.width,
    );

    d2.velocity = d.isVerticleDetectorOutOfBounds(d2);
    d2.start = d.calculateDetectorPosition(d2);
    d2.color = chooseDetectorColor(
        d2.start,
        d2.width,
        p1.start,
        p1.width,
        p2.start,
        p2.width,
    );

    d3.velocity = d.isHorizontalDetectorOutOfBounds(d3);
    d3.start = d.calculateDetectorPosition(d3);
    d3.color = chooseHorizontalDetectorColor(
        d3.start,
        d3.height,
        p3.start,
        p3.height,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    p.drawVerticleParticle(p1);
    p.drawVerticleParticle(p2);
    p.drawHorizontalParticle(p3);

    d.drawHorizontalDetector(d3);
    d.drawVerticleDetector(d2);
    d.drawVerticleDetector(d1);

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
