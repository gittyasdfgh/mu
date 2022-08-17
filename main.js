function preload()
{}
function setup()
{
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw()
{
image(video,160,120,320,240);
stroke('red');
fill('green');
circle(35,35,70);
circle( 570,430,70);
circle(570,35,70);
circle(35,430,70);
stroke('orange');
fill('violet')
rect(70,5,465,40);
rect(70,400,465,40);
rect(70,5,40,450);
rect(500,5,40,410);
tint(tint_color);
}
function take_snapshot()
{
save('adheesh.png');
}
function gunem()
{
tint_color=document.getElementById("color_name").value;

 }