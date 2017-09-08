var gl;

initGL();
draw();

function initGL() {
  var canvas = document.getElementById("canvas");
  console.log(canvas);
  gl = canvas.getContext("webgl");
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0, 0, 1, 1);
}

function draw() {
  gl.clear(gl.COLOR_BUFFER_BIT);
}