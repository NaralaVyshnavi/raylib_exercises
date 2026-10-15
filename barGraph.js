const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const screenWidth = 300;
    const screenHeight = 400;
    r.InitWindow(screenWidth, screenHeight, "Circle Points");
    r.SetTargetFPS(50);
    const barWidth = 20;
    const barGap = 10;
    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    return {
        screenWidth,
        screenHeight,
        barWidth,
        barGap,
        data,
    };
}

function calulateMax(data) {
    let max = data[0];
    for (const number of data) {
        max = number > max ? number : max;
    }
    return max;
}

function calulateMaxHeight(w) {
    return (90 * w.screenHeight) / 100;
}

function calculateHeight(number, maxValue, maxHeight) {
    return maxHeight - ((maxValue - number) * maxHeight) / 100;
}

function calculateHeight(data, i, maxValue, maxHeight) {
    return maxHeight - ((maxValue - data[i]) * maxHeight) / 100;
}

function drawBar(x, y, maxHeight, maxValue, world, i) {
    x += world.barGap;
    height = calculateHeight(world.data, i, maxValue, maxHeight);
    y = world.screenHeight - height;

    r.DrawRectangle(x, y, world.barWidth, height, r.BLUE);
}

function drawGraph(world) {
    world.maxValue = calulateMax(world.data);
    world.maxHeight = calulateMaxHeight(world);
    let x = 0;
    let y = 0;
    for (let i = 0; i < world.data.length; i++) {
        drawBar(x, y, world.maxHeight, world.maxValue, world, i);
        x = x + world.barWidth + world.barGap;
    }
}

function getAverage(data) {
    let sum = 0;
    const length = data.length;
    for (const number of data) {
        sum += number;
    }
    return sum / length;
}

function drawAverageLine(data, height, width, maxValue, maxHeight) {
    let unit = maxHeight / maxValue;
    let averageOfData = getAverage(data);
    const y = height - averageOfData * unit;

    r.DrawLine(0, y, width, y, r.RED);
}

function update() {}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    drawGraph(world);
    drawAverageLine(
        world.data,
        world.screenHeight,
        world.screenWidth,
        world.maxValue,
        world.maxHeight,
    );
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
