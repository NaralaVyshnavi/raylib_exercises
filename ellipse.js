const r = require("raylib");

const screenWidth = 800;
const screenHeight = 800;

const center = {
    x: 300,
    y: 200,
};
const horizontalRadius = 200;
const verticalRadius = 100;
let point = {
    x: screenWidth / 2,
    y: screenHeight / 2,
};

let numberOfPoints = 30;

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Circle Points");
    r.SetTargetFPS(50);
}

function drawPoint(point) {
    let vertices = [];
    let angle = 0;
    for (let i = 0; i < numberOfPoints; i++) {
        r.DrawCircleV(point, 2, r.YELLOW);
        point.x = Math.ceil(
            center.x + horizontalRadius * Math.cos((angle * Math.PI) / 180),
        );
        point.y = Math.ceil(
            center.y + verticalRadius * Math.sin((angle * Math.PI) / 180),
        );
        angle += 360 / numberOfPoints;
        vertices[i] = { x: point.x, y: point.y };
    }
    drawLines(vertices);
}

function drawLines(vertices) {
    for (let i = 0; i < vertices.length - 1; i++) {
        r.DrawLineEx(vertices[i], vertices[i + 1], 5, r.BLACK);
    }
    r.DrawLineEx(vertices[vertices.length - 1], vertices[0], 5, r.BLACK);
}

function update() {}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawCircleLines(center.x, center.y, 160, r.BLUE);
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
