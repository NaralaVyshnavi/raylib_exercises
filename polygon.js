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

let numberOfPoints = 5;
let angle = 0;

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Polygon");
    r.SetTargetFPS(50);
}

function calX() {
    return center.x + radius * Math.cos((angle * Math.PI) / 180);
}

function calY() {
    return center.y + radius * Math.sin((angle * Math.PI) / 180);
}

function drawPoint(p) {
    let arrayOfPoints = [];
    for (let i = 0; i < numberOfPoints; i++) {
        r.DrawCircleV(p, 5, r.YELLOW);
        p.x = calX();
        p.y = calY();
        arrayOfPoints[i] = { x: p.x, y: p.y };
        angle += 360 / numberOfPoints;
    }
    for (let i = 0; i < arrayOfPoints.length - 1; i++) {
        r.DrawLineEx(arrayOfPoints[i], arrayOfPoints[i + 1], 4, r.BLACK);
    }
    r.DrawLineEx(
        arrayOfPoints[arrayOfPoints.length - 1],
        arrayOfPoints[0],
        5,
        r.BLACK,
    );
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
