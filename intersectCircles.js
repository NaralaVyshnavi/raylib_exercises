const r = require("raylib");

const windowWidth = 500;
const windowHeight = 500;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Circles Interesect");
    r.SetTargetFPS(50);
}

const x1 = 100;
const y1 = 100;
const r1 = 50;

const x2 = 150;
const y2 = 150;
const r2 = 45;

let colour = r.BLACK;

function sqr(x) {
    return x * x
}

function calDistance(x1, y1, x2, y2) {
    return (sqr(x2 - x1) + sqr(y2 - y1)) ** 0.5;
}

function calDifference(distance, r1, r2) {
    return distance - (r1 + r2)
}

function chooseColour() {
    colour = r.RED;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE)
    r.DrawCircle(x1, y1, r1, colour);
    r.DrawCircle(x2, y2, r2, colour);
    r.EndDrawing();
}

function update() {
    const distance = calDistance(x1, y1, x2, y2);
    const difference = calDifference(distance, r1, r2);
    if (difference <= 0) {
        chooseColour();
    }
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