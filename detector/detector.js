function isDetectorOutOfBounds(start, lower, upper, width, velocity) {
    let end = start + width;
    return end > upper || start < lower ? -velocity : velocity;
}

function calculateDetectorPosition(start, velocity) {
    return start + velocity;
}

function isOverLapping(
    detectorStart,
    detectorWidth,
    partcleStart,
    particleWidth,
) {
    let detectorEnd = detectorStart + detectorWidth;
    let particleEnd = partcleStart + particleWidth;
    return !(detectorStart > particleEnd || detectorEnd < partcleStart);
}

function isOverLappingParticles(
    start1,
    width1,
    start2,
    width2,
    start3,
    width3,
) {
    return (
        isOverLapping(start1, width1, start2, width2) ||
        isOverLapping(start1, width1, start3, width3)
    );
}

module.exports = {
    isDetectorOutOfBounds,
    calculateDetectorPosition,
    isOverLapping,
    isOverLappingParticles,
};
