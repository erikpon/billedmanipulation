let img;
let pixelate=1;
function preload(){
  img = loadImage('grumpy.jpg');
}

function setup(){
  width = 400;
  height = 400;
  createCanvas(width,height);
  noStroke();
}

function draw(){
  image(img,400,0);
    ownFilter();
}

function ownFilter(){
  let pixelSize = int(400/pixelate);
  for (let i=0;i<width-pixelSize; i = i+pixelSize){
    for (let j=0;j<height; j = j+pixelSize){
      let c = img.get(i,j);
      fill(c);
      rect(i,j,pixelSize,pixelSize);
      if (pixelate>40) {
        pixelSize=int(300/pixelate);
      }
    }
  }
}

function mouseClicked() {
  pixelate += 1;
  print(pixelate);
}
