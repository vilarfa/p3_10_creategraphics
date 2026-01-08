let pg1, pg2;
let img; 
function setup() {
  var c = createCanvas(600,600);
  c.parent("canvasWrapper");
  img = loadImage("img/xena.JPEG");
  pg1 = createGraphics(600,600);
  pg2 = createGraphics(600,600);
}
function draw() {
  var c = pg2.get(mouseX, mouseY);
  var dis = dist(mouseX, mouseY, pmouseX, pmouseY);
  var mdis = map(dis, 0, 190, 5, 80);
  print(dis);
  pg2.background(img);  
  //pg2.image(img,0,0);
  pg1.noStroke();
  pg1.fill(c);
  /* if (mouseIsPressed === true) {
   pg1.ellipse(width/2,height/2,300,300);
   pg1.ellipse(mouseX, mouseY, mdis, mdis);
   }*/
  for (var x = 0; x < width; x = x + 20) {
    for (var y = 0; y < width; y = y + 20) {
      c = pg2.get(x, y);
      pg1.fill(c);
      pg1.ellipse(x, y, 20, 20);
    }
  }
  //image(pg2,0,0);
  image(pg1, 0, 0);
}
function saveIMG(){
  image(pg1, 0, 0);
  clear();
  save("cercle.png");
}
function keyPressed() {
  if (key === 's' || key === 'S')
  saveIMG();
}