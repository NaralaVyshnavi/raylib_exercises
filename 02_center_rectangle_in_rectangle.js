const r = require("raylib");


const windowWidth = 300;
const windowHeight = 350;
const largeRectWidth = 100;
const largeRectHeight = 100;
const smallerRectWidth = 30;
const smallerRectheight = 20;
const largeRectX = 24;
const largeRectY = 38;
let x;
let y;

function calculate(largerRectDimension, smallerRectDimension) {
    return (largerRectDimension - smallerRectDimension) / 2
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Rectangle in Rectangle");
    r.SetTargetFPS(50);
}
function update() {
    x = largeRectX + calculate(largeRectWidth, smallerRectWidth)
    y = largeRectY + calculate(largeRectHeight, smallerRectheight);
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE)
    r.DrawRectangle(largeRectX, largeRectY, largeRectWidth, largeRectHeight, r.WHITE);
    r.DrawRectangle(x, y, smallerRectWidth, smallerRectheight, r.RED)
    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}
function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();
