const sketch = require("./sketch");

function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}
const WIDTH = 600;
const HEIGHT = 600;
const TITLE = "A Partical Detector";
function main() {
    sketch.setup(WIDTH, HEIGHT, TITLE);
    loop();
    sketch.teardown();
}

main();
