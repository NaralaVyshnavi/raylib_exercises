const r = require("raylib");

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

const px = 300;
const py = 0;
const pwidth = 100;
const pheight = screenHeight;



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

function chooseColour(dx, px) {
    if (dx + width >= px) {
        color = r.RED;
    }
    if (dx > px + pwidth || dx + width < px) {
        color = r.WHITE;
    }
}

function update() {
    move(start, end);
    chooseColour(dx, px);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    r.DrawRectangle(px, py, pwidth, pheight, r.BLUE);
    r.DrawRectangle(400, 0, 5, screenWidth, r.BLUE);
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