const r = require("raylib");
let x =50;
let y =50;
const windowWidth=400;
const windowHeight=400;
r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    x=x+1;

    if(x>=(windowWidth/2)-100){
        x=-10;
    }
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(x, y, 100, 100, r.RED);
    r.DrawLine(windowWidth/2,0,windowWidth/2,windowHeight,r.WHITE);
    r.EndDrawing();
}

r.CloseWindow();
