const r = require("raylib");

function createDetector(start, width, height, lower, upper, velocity) {
    let color = r.WHITE;
    return {
        start,
        width,
        height,
        lower,
        upper,
        velocity,
        color,
    };
}

function isVerticleDetectorOutOfBounds(detector) {
    let detecor_end = detector.start + detector.width;
    return detecor_end > detector.upper || detector.start < detector.lower
        ? -detector.velocity
        : detector.velocity;
}
function isHorizontalDetectorOutOfBounds(detector) {
    let detecor_end = detector.start + detector.height;
    return detecor_end > detector.upper || detector.start < detector.lower
        ? -detector.velocity
        : detector.velocity;
}

function calculateDetectorPosition(detector) {
    return detector.start + detector.velocity;
}

function isVerticleDetectorOverLapping(detector, particle) {
    let detectorEnd = detector.start + detector.width;
    let particleEnd = particle.start + particle.width;
    return !(detectorStart > particleEnd || detectorEnd < particle.start);
}
// function isOverLapping(
//     detectorStart,
//     detectorWidth,
//     partcleStart,
//     particleWidth,
// ) {
//     let detectorEnd = detectorStart + detectorWidth;
//     let particleEnd = partcleStart + particleWidth;
//     return !(detectorStart > particleEnd || detectorEnd < partcleStart);
// }

// function isOverLappingParticles(
//     start1,
//     width1,
//     start2,
//     width2,
//     start3,
//     width3,
// ) {
//     return (
//         isOverLapping(start1, width1, start2, width2) ||
//         isOverLapping(start1, width1, start3, width3)
//     );
// }

function isOverLappingParticles(detector, particle1, particle2) {
    return (
        isVerticleDetectorOverLapping(detector, particle1) ||
        isVerticleDetectorOverLapping(detector, particle2)
    );
}

function drawVerticleDetector(detector) {
    r.DrawRectangle(
        detector.start,
        0,
        detector.width,
        detector.height,
        detector.color,
    );
}

function drawHorizontalDetector(detector) {
    r.DrawRectangle(
        0,
        detector.start,
        detector.width,
        detector.height,
        detector.color,
    );
}

module.exports = {
    createDetector,
    drawHorizontalDetector,
    drawVerticleDetector,
    isVerticleDetectorOutOfBounds,
    isHorizontalDetectorOutOfBounds,
    calculateDetectorPosition,
    isOverLapping,
    isOverLappingParticles,
};
