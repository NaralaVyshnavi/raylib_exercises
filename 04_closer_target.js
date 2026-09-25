const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;
const sourceX = 100;
const sourceY = 400;
const targetOneX = 400;
const targetOneY = 200;
const targetTwoX = 400;
const targetTwoY = 600;
const radius = 25;

function setUp() {
    r.InitWindow(windowWidth, windowHeight, "Close Target");
    r.SetTargetFPS(50);
}

function calculateTargetOne() {
    return (((targetOneX - sourceX) ** 2) + ((targetOneY - sourceY) ** 2)) ** 0.5
}

function calculateTargetTwo() {
    return (((targetTwoX - sourceX) ** 2) + ((targetTwoY - sourceY) ** 2)) ** 0.5
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawCircle(sourceX, sourceY, radius, r.BLUE);
    r.DrawCircle(targetOneX, targetOneY, radius, r.RED);
    r.DrawCircle(targetTwoX, targetTwoY, radius, r.RED);

    if (calculateTargetOne() < calculateTargetTwo()) {
        r.DrawLine(sourceX, sourceY, targetOneX, targetOneY, r.BLACK);
    }
    else if (calculateTargetOne() == calculateTargetTwo()) {
        r.DrawLine(sourceX, sourceY, targetOneX, targetOneY, r.BLACK);
        r.DrawLine(sourceX, sourceY, targetTwoX, targetTwoY, r.BLACK);
    }
    else {
        r.DrawLine(sourceX, sourceY, targetTwoX, targetTwoY, r.BLACK);
    }
    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}

function main() {
    setUp();
    loop();
    r.CloseWindow();
}
main();

