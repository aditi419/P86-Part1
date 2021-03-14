var Canvas = new fabric.Canvas("myCanvas");
var block_width = 30;
var block_height = 30;
player_x = 10;
player_y = 10;
var player_image = "";
var block_image = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function (img){
        player_image = img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({top:player_y, left:player_x});
    });

    canvas.add(player_image);
}

function newImage(get_image) {
        fabric.Image.fromURL(get_image, function (img){
            block_image = img;
            block_image.scaleToWidth(block_width);
            block_image.scaleToHeight(block_height);
            block_image.set({top:player_y, left:player_x});
        });
            
        canvas.add(block_image);

}  