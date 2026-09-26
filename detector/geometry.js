function sqr(x) {
    return x * x
}

function distance(x1, y1, x2, y2) {
    return (sqr(x2 - x1) + sqr(y2 - y1)) ** 0.5;
}


module.exports = {
    distance
};