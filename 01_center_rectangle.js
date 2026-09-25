const r = require("raylib");
const windowWidth = 400;
const windowHeight = 200;
const width = 20;
const height = 100;

let x, y;


function getCoordinate(windowDime, rectDim) {
    return (windowDime - rectDim) / 2;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Center a Rectangle");
    r.SetTargetFPS(60);
}

function update() {
    y = getCoordinate(windowHeight, height);
    x = getCoordinate(windowWidth, width);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(x, y, width, height, r.WHITE);
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
