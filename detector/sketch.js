const r = require("raylib");

const screenWidth = 500;
const screenHeight = 500;
const FPS = 50;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Template");
    r.SetTargetFPS(FPS);
}

const dwidth = 50;
const dheight = screenHeight;

let d1x = 0;
let d1y = 0;
let color1 = r.WHITE;
let color2 = r.WHITE;
let d1start = 0;
let d1end = screenWidth / 2
const d1speed = 3;

let d1direction = "Back";
let d2direction = "Back";

const p1x = 350;
const p1y = 0;
const p1width = 20;
const p1height = screenHeight;

const p2x = 250;
const p2y = 0;
const p2Width = 20;
const p2Height = screenHeight;

let d2x = screenWidth / 2;
let d2y = 0;
const d2start = screenWidth / 2;
const d2end = screenWidth
const d2speed = 2;


function changeDirection(direction) {
    if (direction === "Front") {
        return "Back";
    }
    else {
        return "Front";
    }
}

function getDirection(x, start, end, direction, width) {
    if (x >= end - width || x <= start) {
        return changeDirection(direction);
    }
    return direction
}

function move(dx, speed, direction) {
    if (direction === "Front") {
        return dx + speed;
    } else {
        return dx - speed;
    }
}

function chooseColour(detectorX, particleX, dwidth, pwidth) {
    if (detectorX + dwidth >= particleX && detectorX <= particleX + pwidth) {
        return r.RED;
    }
    else {
        return r.WHITE;
    }
}

function update() {

    d1direction = getDirection(d1x, d1start, d1end, d1direction, dwidth);
    d2direction = getDirection(d2x, d2start, d2end, d2direction, dwidth);

    d1x = move(d1x, d1speed, d1direction);
    d2x = move(d2x, d2speed, d2direction);

    color1 = chooseColour(d1x, p1x, dwidth, p1width);
    if (color1 !== r.RED) {
        color1 = chooseColour(d1x, p2x, dwidth, p2Width);
    }
    color2 = chooseColour(d2x, p2x, dwidth, p2Width);
    if (color2 !== r.RED) {
        color2 = chooseColour(d2x, p1x, dwidth, p1width);
    }
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    r.DrawRectangle(p1x, p1y, p1width, p1height, r.BLUE);
    r.DrawRectangle(p2x, p2y, p2Width, p2Height, r.BLUE);
    r.DrawRectangle(d1x, d1y, dwidth, dheight, color1);
    r.DrawRectangle(d2x, d2y, dwidth, dheight, color2);
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
    teardown
};