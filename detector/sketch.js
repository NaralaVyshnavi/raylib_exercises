const r = require("raylib");
const d = require("./detector.js");
const p = require("./particle.js");
const range = require("./draw.js");

function setup(world) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.WIDTH, world.HEIGHT, world.TITLE);
    r.SetTargetFPS(50);
    world.d1 = d.createDetector(
        0,
        50,
        world.HEIGHT,
        0,
        world.WIDTH / 2,
        2,
        "coloumn",
    );
    world.d2 = d.createDetector(
        world.WIDTH / 2,
        50,
        world.HEIGHT,
        world.WIDTH / 2,
        world.WIDTH,
        4,
        "column",
    );
    world.d3 = d.createDetector(0, world.WIDTH, 50, 0, world.HEIGHT, 4, "row");

    world.p1 = p.createParticle(100, 50, world.HEIGHT, "column");
    world.p2 = p.createParticle(250, 70, world.HEIGHT, "column");
    world.p3 = p.createParticle(300, world.WIDTH, 20, "row");
    world.p4 = p.createParticle(100, world.WIDTH, 50, "row");
}

function update(world) {
    world.d1 = d.updateDetector(world.d1, world.p1, world.p2);
    world.d2 = d.updateDetector(world.d2, world.p1, world.p2);
    world.d3 = d.updateDetector(world.d3, world.p3, world.p4);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    range.draw(world.p1);
    range.draw(world.p2);
    range.draw(world.p3);
    range.draw(world.p4);

    range.draw(world.d3);
    range.draw(world.d2);
    range.draw(world.d1);

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
