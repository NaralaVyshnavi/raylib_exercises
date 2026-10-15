const r = require("raylib");

const screenWidth = 400;
const screenHeight = 400;

const center = {
    x: screenWidth / 2,
    y: screenHeight / 2,
};
let pointA = {
    x: 100,
    y: 300,
};
let pointB = {
    x: 300,
    y: 150,
};
let radius = 150;
let angle = 0;
let hypotonuse, oppositeSide;
function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Angle");
    r.SetTargetFPS(50);
}

function sqr(x) {
    return x * x;
}

function calDistance(x1, y1, x2, y2) {
    return (sqr(x2 - x1) + sqr(y2 - y1)) ** 0.5;
}

function update() {
    adjacentSide = calDistance(pointA.x, pointA.y, pointB.x, pointA.y);
    oppositeSide = calDistance(pointB.x, pointB.y, pointB.x, pointA.y);

    angle = Math.abs(
        Math.floor(
            (Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180) /
                Math.PI,
        ),
    );
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    update();
    r.DrawCircleV(pointA, 5, r.YELLOW);
    r.DrawCircleV(pointB, 5, r.RED);
    r.DrawText("Angle :" + angle, 20, 20, 20, r.BLACK);
    r.DrawLine(pointA.x, pointA.y, pointB.x, pointB.y, r.WHITE);
    r.DrawLine(pointA.x, pointA.y, pointB.x, pointA.y, r.BLACK);
    r.DrawLine(pointB.x, pointB.y, pointB.x, pointA.y, r.BLACK);
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
