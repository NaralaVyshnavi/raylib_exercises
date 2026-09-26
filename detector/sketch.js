const r = require("raylib");
const d = require("./geometry")

const screenWidth = 500;
const screenHeight = 500;
const FPS = 50;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Template");
    r.SetTargetFPS(FPS);
}

let dx = 0;
let dy = 0;
const width = 50;
const height = screenHeight;
let color = r.WHITE;
let start = 0;
let end = screenWidth

let direction = "Front";

const p1x = 300;
const p1y = 0;
const p1width = 100;
const p1height = screenHeight;

const p2x = 100;
const p2y = 0;
const p2Width = 20;
const p2Height = screenHeight;




function move(start, end) {
    if (direction === "Front") {
        if (dx <= end - width) {
            dx = dx + 2;
        }
        else {
            direction = "Back";
        }
    }
    if (direction === "Back") {
        if (dx >= start) {
            dx = dx - 2;
        }
        else {
            direction = "Front";
        }
    }
}

function chooseColour(detectorX, particleX, dwidth, pwidth) {
    if (detectorX + dwidth >= particleX && detectorX <= particleX + pwidth) {
        color = r.RED;
    }
    if (detectorX > particleX + pwidth || detectorX + dwidth < particleX) {
        color = r.WHITE;
    }
}

function update() {
    move(start, end);
    chooseColour(dx, p1x, width, p1width);
    if (color !== r.RED) {
        chooseColour(dx, p2x, width, p2Width);
    }

}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    r.DrawRectangle(p1x, p1y, p1width, p1height, r.BLUE);
    r.DrawRectangle(p2x, p2y, p2Width, p2Height, r.BLUE);
    r.DrawRectangle(dx, dy, width, height, color);
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