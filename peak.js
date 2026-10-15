const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const screenWidth = 500;
    const screenHeight = 400;
    r.InitWindow(screenWidth, screenHeight, "Peak");
    r.SetTargetFPS(50);
    const gap = 20;
    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40, 90, 21];
    const peaks = [];
    return {
        screenWidth,
        screenHeight,
        gap,
        data,
        peaks,
    };
}

function calulateMax(data) {
    let max = data[0];
    for (const number of data) {
        max = Math.max(number, max);
    }
    return max;
}

function calulateMaxHeight(w) {
    return (90 * w.screenHeight) / 100;
}

function isPeak(data, i) {
    return data[i + 1] > data[i] && data[i + 1] > data[i + 2];
}

function calculatePeaks(world) {
    const data = world.data;
    world.peaks = [];
    for (let i = 0; i < data.length; i++) {
        if (isPeak(data, i)) {
            world.peaks.push(data[i + 1]);
        }
    }
}

function calculateHeight(unit, number) {
    return number * unit;
}

function checkPeak(peaksData, n) {
    for (const number of peaksData) {
        if (number === n) {
            return true;
        }
    }
    return false;
}

function connectPoints(p1, p2) {
    r.DrawLineEx(p1, p2, 1, r.BLACK);
}

function getCoordinates(x, gap, unit, number, screenHeight) {
    const X = x + gap;
    const Y = screenHeight - calculateHeight(unit, number);
    return { x: X, y: Y };
}

function drawPoints(unit, i, x, gap, data, screenHeight, peaksData) {
    let point1 = getCoordinates(x, gap, unit, data[i], screenHeight);
    let point2 = getCoordinates(x + gap, gap, unit, data[i + 1], screenHeight);

    const status = checkPeak(peaksData, data[i]);
    if (status) {
        r.DrawCircleV(point1, 3, r.RED);
    }
    connectPoints(point1, point2);
}

function drawGraph(world) {
    world.maxValue = calulateMax(world.data);
    world.maxHeight = calulateMaxHeight(world);
    world.unit = world.maxHeight / world.maxValue;

    let x1 = 0;
    for (let i = 0; i < world.data.length; i++) {
        drawPoints(
            world.unit,
            i,
            x1,
            world.gap,
            world.data,
            world.screenHeight,
            world.peaks,
        );
        x1 += world.gap;
    }
}

function update() {}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    calculatePeaks(world);
    drawGraph(world);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose(world)) {
        update(world);
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}
main();
