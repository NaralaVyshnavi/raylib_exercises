const sketch = require("./sketch");

function loop(world) {
    while (sketch.running()) {
        sketch.update(world);
        sketch.draw(world);
    }
}
const world = {
    WIDTH: 600,
    HEIGHT: 600,
    TITLE: "A Partical Detector",
};

function main() {
    sketch.setup(world);
    loop(world);
    sketch.teardown();
}

main();
