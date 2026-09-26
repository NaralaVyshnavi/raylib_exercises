const r = require("raylib");

const screenWidth = 300;
const screenHeight = 200;
const FPS = 50;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Template");
    r.SetTargetFPS(FPS);
}

let x = 0;
let y = 0;
const width = 50;
const height = screenHeight;
let start = 0;
let end = screenWidth

let direction = "Front";

function move(start, end) {
    if (direction === "Front") {
        if (x <= end - width) {
            x = x + 2;
        }
        else {
            direction = "Back";
        }
    }
    if (direction === "Back") {
        if (x >= start) {
            x = x - 2;
        }
        else {
            direction = "Front";
        }
    }
}

function update() {
    move(start, end);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    r.DrawRectangle(x, y, width, height, r.WHITE);
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