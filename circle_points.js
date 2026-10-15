const r = require("raylib");

const screenWidth = 400;
const screenHeight = 400;

const center = {
    x: screenWidth / 2,
    y: screenHeight / 2,
};

let radius = 150;

let point = {
    x: screenWidth / 2,
    y: screenHeight / 2,
};

let numberOfPoints = 2;
let angle = 0;

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Circle Points");
    r.SetTargetFPS(50);
}
function drawPoint(point) {
    for (let i = 0; i < numberOfPoints; i++) {
        r.DrawCircleV(point, 5, r.YELLOW);
        point.x = center.x + radius * Math.cos((angle * Math.PI) / 180);
        point.y = center.y + radius * Math.sin((angle * Math.PI) / 180);
        angle += 360 / numberOfPoints;
    }
}
function update() {}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawCircleLines(center.x, center.y, radius, r.WHITE);
    drawPoint(point);
    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}
function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();
