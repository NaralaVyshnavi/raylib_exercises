const r = require("raylib");

function createDetector(start, width, height, lower, upper, velocity, matrix) {
    let color = r.WHITE;
    return {
        start,
        width,
        height,
        lower,
        upper,
        velocity,
        matrix,
        color,
    };
}

function isDetectorOutOfBounds(detector) {
    const dDimension =
        detector.matrix === "row" ? detector.height : detector.width;

    const detecor_end = detector.start + dDimension;

    return detecor_end > detector.upper || detector.start < detector.lower
        ? -detector.velocity
        : detector.velocity;
}

function calculateDetectorPosition(detector) {
    return detector.start + detector.velocity;
}

function isDetectorOverLapping(detector, particle) {
    const dDimension =
        detector.matrix === "row" ? detector.height : detector.width;

    const pDimension =
        particle.matrix === "row" ? particle.height : particle.width;

    const detectorEnd = detector.start + dDimension;
    const particleEnd = particle.start + pDimension;
    return !(detector.start > particleEnd || detectorEnd < particle.start);
}

function isOverLappingParticles(detector, particle1, particle2) {
    if (particle2) {
        return (
            isDetectorOverLapping(detector, particle1) ||
            isDetectorOverLapping(detector, particle2)
        );
    }
    return isDetectorOverLapping(detector, particle1);
}

function chooseDetectorColor(detector, particle1, particle2) {
    return isOverLappingParticles(detector, particle1, particle2)
        ? r.RED
        : r.WHITE;
}

function updateDetector(detector, particle1, particle2) {
    detector.velocity = isDetectorOutOfBounds(detector);
    detector.start = calculateDetectorPosition(detector);
    detector.color = chooseDetectorColor(detector, particle1, particle2);
    return detector;
}

module.exports = {
    createDetector,
    updateDetector,
};
