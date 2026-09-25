const r = require("raylib");

const windowWidth = 500;
const windowHeight = 500;
const width = 30;
const height = 30;
r.InitWindow(windowWidth, windowHeight, "EMOJI");
r.SetTargetFPS(50);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangle(260, 150, width, height, r.YELLOW)
    r.DrawRectangle(230, 150, width, height, r.YELLOW)
    r.DrawRectangle(200, 150, width, height, r.YELLOW)

    r.DrawRectangle(230, 180, width, height, r.YELLOW)
    r.DrawRectangle(260, 180, width, height, r.YELLOW)
    r.DrawRectangle(170, 180, width, height, r.YELLOW)
    r.DrawRectangle(290, 180, width, height, r.YELLOW)
    r.DrawRectangle(290, 180, width, height, r.YELLOW)

    r.DrawRectangle(200, 180, width, height, r.YELLOW)
    r.DrawRectangle(140, 210, width, height, r.YELLOW);
    r.DrawRectangle(170, 210, width, height, r.YELLOW);
    r.DrawRectangle(200, 210, width, height, r.BLACK)
    r.DrawRectangle(230, 210, width, height, r.YELLOW)
    r.DrawRectangle(260, 210, width, height, r.BLACK)
    r.DrawRectangle(290, 210, width, height, r.YELLOW)
    r.DrawRectangle(320, 210, width, height, r.YELLOW)



    r.DrawRectangle(140, 240, width, height, r.YELLOW);
    r.DrawRectangle(170, 240, width, height, r.YELLOW);
    r.DrawRectangle(200, 240, width, height, r.YELLOW);
    r.DrawRectangle(230, 240, width, height, r.YELLOW);
    r.DrawRectangle(260, 240, width, height, r.YELLOW);
    r.DrawRectangle(290, 240, width, height, r.YELLOW);
    r.DrawRectangle(320, 240, width, height, r.YELLOW);




    r.DrawRectangle(140, 270, width, height, r.YELLOW);
    r.DrawRectangle(170, 270, width, height, r.BLACK);
    r.DrawRectangle(200, 270, width, height, r.YELLOW);
    r.DrawRectangle(230, 270, width, height, r.YELLOW);
    r.DrawRectangle(260, 270, width, height, r.YELLOW);
    r.DrawRectangle(290, 270, width, height, r.BLACK);
    r.DrawRectangle(320, 270, width, height, r.YELLOW);





    r.DrawRectangle(170, 300, width, height, r.YELLOW);
    r.DrawRectangle(200, 300, width, height, r.BLACK);
    r.DrawRectangle(230, 300, width, height, r.BLACK);
    r.DrawRectangle(260, 300, width, height, r.BLACK);
    r.DrawRectangle(290, 300, width, height, r.YELLOW);

    r.DrawRectangle(200, 330, width, height, r.YELLOW);
    r.DrawRectangle(230, 330, width, height, r.YELLOW);
    r.DrawRectangle(260, 330, width, height, r.YELLOW);
    r.EndDrawing();

}
r.CloseWindow();
