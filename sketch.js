var btn_red;
var btn_green;
var r;
var g;
var b;


function setup() {
  createCanvas(400,400);

  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

}

function draw() 
{
  background(rgb(r,g,b));
}

function red_bg()
{
  r = 255;
  g = 0;
  b =0;
}

function green_bg()
{
  console.log(1)
  r = 0;
  g = 255;
  b =0;
}