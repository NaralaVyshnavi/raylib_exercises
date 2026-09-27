const r = require("raylib");

const screenWidth = 800;
const screenHeight = 800;
const FPS = 50;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Template");
    r.SetTargetFPS(FPS);
}

const detector_width = 50;
const detector_height = screenHeight;

let detector1_x = 0;
let detector1_y = 0;
let detector1_color = r.WHITE;
let detector1_start = 0;
let detector1_end = screenWidth / 2
const detector1_speed = 3;
let detector1_direction = 0;

let detector2_x = screenWidth / 2;
let detector2_y = 0;
const detector2_start = screenWidth / 2;
const detector2_end = screenWidth
const detector2_speed = 2;
let detector2_color = r.WHITE;
let detector2_direction = 0;

let detector3_x = 0;
let detector3_y = 0;
const detector3_start = 0;
const detector3_end = screenHeight;
const detector3_width = screenWidth;
const detector3_height = 50;
let detector3_speed = 3;
let detector3_direction = 0;
let detector3_color = r.WHITE;

const particle1_x = 350;
const particle1_y = 0;
const particle1_width = 20;
const particle1_height = screenHeight;

const particle2_x = 250;
const particle2_y = 0;
const particle2_width = 20;
const particle2_height = screenHeight;

const particle3_x = 0;
const particle3_y = 300;
const particle3_width = screenWidth;
const particle3_height = 50;

function changeDirection(direction) { // '0' means move backward and '1' means move forward
    return direction === 0 ? 1 : 0;
}

function getDirection(offset, start, end, direction, dimension) {
    if (offset >= end - dimension || offset <= start) {
        return changeDirection(direction);
    }
    return direction
}

function move(offset, speed, direction) {
    return direction === 1 ? offset + speed : offset - speed;
}

function chooseColour(detectorOffset, particleOffset, detector_dimension, particle_dimension) {
    if (detectorOffset + detector_dimension >= particleOffset && detectorOffset <= particleOffset + particle_dimension) {
        return r.RED;
    }
    else {
        return r.WHITE;
    }
}

function update() {
    detector1_direction = getDirection(detector1_x, detector1_start, detector1_end, detector1_direction, detector_width);
    detector2_direction = getDirection(detector2_x, detector2_start, detector2_end, detector2_direction, detector_width);
    detector3_direction = getDirection(detector3_y, detector3_start, detector3_end, detector3_direction, detector3_height);

    detector1_x = move(detector1_x, detector1_speed, detector1_direction);
    detector2_x = move(detector2_x, detector2_speed, detector2_direction);
    detector3_y = move(detector3_y, detector3_speed, detector3_direction);

    detector1_color = chooseColour(detector1_x, particle1_x, detector_width, particle1_width);
    if (detector1_color !== r.RED) {
        detector1_color = chooseColour(detector1_x, particle2_x, detector_width, particle2_width);
    }
    detector2_color = chooseColour(detector2_x, particle2_x, detector_width, particle2_width);
    if (detector2_color !== r.RED) {
        detector2_color = chooseColour(detector2_x, particle1_x, detector_width, particle1_width);
    }
    detector3_color = chooseColour(detector3_y, particle3_y, detector3_height, particle3_height);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    r.DrawRectangle(particle1_x, particle1_y, particle1_width, particle1_height, r.BLUE);
    r.DrawRectangle(particle2_x, particle2_y, particle2_width, particle2_height, r.BLUE);
    r.DrawRectangle(particle3_x, particle3_y, particle3_width, particle3_height, r.BLUE);
    r.DrawRectangle(detector3_x, detector3_y, detector3_width, detector3_height, detector3_color);
    r.DrawRectangle(detector1_x, detector1_y, detector_width, detector_height, detector1_color);
    r.DrawRectangle(detector2_x, detector2_y, detector_width, detector_height, detector2_color);
    r.EndDrawing();
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    update,
    draw,
    running,
    teardown
};