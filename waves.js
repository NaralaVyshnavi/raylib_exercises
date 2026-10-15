const r = require("raylib");

const screenWidth = 600;
const screenHeight = 400;

const origin = {
    x: 50,
    y: 200,
};
const point = {
    x: 50,
    y: 200,
};

let numberOfPoints = 10;
let angle = 0;
function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screenWidth, screenHeight, "Circle Points");
    r.SetTargetFPS(10);
}

function update() {}

function calculateRadian(wave, i) {
    if (wave == "sin") {
        return Math.sin((i * Math.PI) / 180) * 100;
    }
    return Math.cos((i * Math.PI) / 180) * 100;
}

function chooseColor(wave) {
    return wave === "sin" ? r.PINK : r.YELLOW;
}

function drawPoints(p, wave, i) {
    let radian = calculateRadian(wave, i);
    let nextRadian = calculateRadian(wave, i + 10);
    p.x = origin.x + i;
    p.y = origin.y - radian;

    const color = chooseColor(wave);
    if (i % 90 === 0) r.DrawCircleV(p, 4, color);
    if (i % 10 === 0) {
        r.DrawCircleV(p, 2, r.GREEN);
        r.DrawLine(p.x, p.y, origin.x + i + 10, origin.y - nextRadian, r.BLUE);
    }
}

function drawWave(p, wave) {
    for (let i = 0; i <= 360; i++) {
        drawPoints(p, wave, i);
    }
}

function draw() {
    r.BeginDrawing();
    r.DrawLine(50, 200, screenWidth, 200, r.RED);
    r.DrawLine(50, 0, 50, screenHeight, r.RED);
    drawWave(point, "sin");
    drawWave(point, "cos");
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
