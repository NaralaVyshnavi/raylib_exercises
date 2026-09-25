const r=require("raylib");

const windowWidth=500;
const windowHeight=500;
const largeRectWidth=400;
const largeRectHeight=400;
const largeRectX=50;
const largeRectY=30;
const width=0.9;
const height=0.9;
let smallX,smallY;
let smallRectWidth,smallRectHeight;


function calculateWidthOfSmallerRect(){
    return largeRectWidth*width;
}

function calculateHeightOfSmallerRect(){
    return largeRectHeight*height;
}



//to get x of smaller rectangle on larger Rectangle
function xOfSmaller(){
    const X=(largeRectWidth/2)-(smallRectWidth/2);
    return X;
}

//to get y of smaller rectangle on larger rectangle
function YOfSmaller(){
    const Y=(largeRectHeight/2)-(smallRectHeight/2);
    return Y;
}

function setUp(){
    r.InitWindow(windowWidth,windowHeight,"Scale and Center");
    r.SetTargetFPS(50);
}
function update(){
    smallRectWidth=calculateWidthOfSmallerRect();
    smallRectHeight=calculateHeightOfSmallerRect();
    smallX=largeRectX+xOfSmaller();
    smallY=largeRectY+YOfSmaller();
}
function draw(){
        r.BeginDrawing();
        r.ClearBackground(r.BLUE);
        r.DrawRectangle(largeRectX,largeRectY,largeRectWidth,largeRectHeight,r.WHITE)
        r.DrawRectangle(smallX,smallY,smallRectWidth,smallRectHeight,r.RED)
        r.EndDrawing();
}
function loop(){
    while(!r.WindowShouldClose()){
        update();
        draw();     
    }
}
function main(){
    setUp();
    loop();
    r.CloseWindow();
}
main();
