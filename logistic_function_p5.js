function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  fill(0);
}

function draw() {
  background(0);
  
  strokeWeight(2);
  stroke(255);
  line(0, window.innerHeight/2, window.innerWidth, window.innerHeight/2);
  line(window.innerWidth/2, 0, window.innerWidth/2, window.innerHeight);
  
  var y = point_calc(20);
  var splits = 50;
  var x_min = -10
  var x_max = 10
  logistic(splits, -10, 10);
}

function point_calc(x){
  var fina = (2/(1+Math.pow((Math.E), -x)))-1;
  console.log(fina)
  return fina
}

function logistic(splits, x_min, x_max){
  jump = (x_max-x_min)/splits
  for(var i = x_min; i < x_max; i+=jump){
    line(convert_x(i), convert_y(point_calc(i)), convert_x(i+jump), convert_y(point_calc(i+jump)))
  }
}

function convert_x(val){
  return ((10+val)/20)*window.innerWidth;
}

function convert_y(val){
  return ((1.5-val)/3)*window.innerHeight;
}
