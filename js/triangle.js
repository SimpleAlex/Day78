var canvas = document.getElementById("canvas");
var width = 400;
var height = Math.sqrt(0.75) * width;
var r = 0.25 * width / Math.sqrt(0.75);
canvas.width = width;
canvas.height = height;

var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
ctx.strokeStyle = "#ba3030";
ctx.lineWidth = 3;
ctx.lineCap = "round";

function Point(x, y) {
  this.x = x;
  this.y = y;
}

var a = new Point(canvas.width/2, 0);
var b = new Point(0, canvas.height);
var c = new Point(canvas.width, canvas.height);
var center = new Point(canvas.width/2, canvas.height-r);

var angle = 0;
function draw() {
  requestAnimationFrame(draw);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawLine(a, 0);
  drawLine(b, Math.PI * 2 / 3);
  drawLine(c, Math.PI * 4 / 3);
  drawInnerLines();
  angle += 0.025;
}

function drawLine(point, delta) {
  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
  var x = Math.cos(angle + delta) * r;
  var y = Math.sin(angle + delta) * r;
  ctx.lineTo(center.x+x, center.y+y);
  ctx.stroke();
}

function drawInnerLines() {
  ctx.beginPath();

  var delta = 0;
  var x = Math.cos(angle + delta) * r;
  var y = Math.sin(angle + delta) * r;
  ctx.moveTo(center.x + x, center.y + y);

  delta = Math.PI * 2 / 3;
  x = Math.cos(angle + delta) * r;
  y = Math.sin(angle + delta) * r;
  ctx.lineTo(center.x + x, center.y + y);

  delta = Math.PI * 4 / 3;
  x = Math.cos(angle + delta) * r;
  y = Math.sin(angle + delta) * r;
  ctx.lineTo(center.x + x, center.y + y);

  ctx.stroke();
}

draw();
