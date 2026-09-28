const r = require("raylib");

const d = require("./detector.js");

const d1 = require("./d1.js");
const d2 = require("./d2.js");
const d3 = require("./d3.js");

const particle1_start = 100;
const particle1_end = 0;
const particle1_width = 20;
let particle1_height;

const particle2_start = 350;
const particle2_end = 0;
const particle2_width = 50;
let particle2_height;

const particle3_start = 0;
const particle3_end = 300;
let particle3_width;
const particle3_height = 100;

function setup(width, height, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(50);

    d1.upper = height / 2;
    d1.height = height;

    d2.start = d1.upper;
    d2.lower = d2.start;
    d2.upper = height;
    d2.height = height;

    d3.width = width;
    d3.upper = height;

    particle1_height = height;
    particle2_height = height;
    particle3_width = width;
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
    d1.velocity = d.isDetectorOutOfBounds(
        d1.start,
        d1.lower,
        d1.upper,
        d1.width,
        d1.velocity,
    );

    d1.start = d.calculateDetectorPosition(d1.start, d1.velocity);

    d1.color = chooseDetectorColor(
        d1.start,
        d1.width,
        particle1_start,
        particle1_width,
        particle2_start,
        particle2_width,
    );

    d2.velocity = d.isDetectorOutOfBounds(
        d2.start,
        d2.lower,
        d2.upper,
        d2.width,
        d2.velocity,
    );

    d2.start = d.calculateDetectorPosition(d2.start, d2.velocity);

    d2.color = chooseDetectorColor(
        d2.start,
        d2.width,
        particle1_start,
        particle1_width,
        particle2_start,
        particle2_width,
    );

    d3.velocity = d.isDetectorOutOfBounds(
        d3.y,
        d3.lower,
        d3.upper,
        d3.height,
        d3.velocity,
    );

    d3.y = d.calculateDetectorPosition(d3.y, d3.velocity);

    d3.color = chooseHorizontalDetectorColor(
        d3.y,
        d3.height,
        particle3_end,
        particle3_height,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        particle1_start,
        particle1_end,
        particle1_width,
        particle1_height,
        r.BLUE,
    );
    r.DrawRectangle(
        particle2_start,
        particle2_end,
        particle2_width,
        particle2_height,
        r.BLUE,
    );
    r.DrawRectangle(
        particle3_start,
        particle3_end,
        particle3_width,
        particle3_height,
        r.BLUE,
    );

    r.DrawRectangle(d3.start, d3.y, d3.width, d3.height, d3.color);
    r.DrawRectangle(d2.start, d2.y, d2.width, d2.height, d2.color);
    r.DrawRectangle(d1.start, d1.y, d1.width, d1.height, d1.color);
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
