//sierpinski Triangle 을 그린다.

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

//helper function to get mid point
function getMid(p1, p2){
  return ([(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2])
}

//helper function to draw Triangle
function drawTriangle(points){
  c.moveTo(points[0][0], points[0][1]);
  c.lineTo(points[1][0], points[1][1]);
  c.lineTo(points[2][0], points[2][1]);
  c.lineTo(points[0][0], points[0][1]);
  c.stroke();
}

function sierpinski(points, degree) {

  drawTriangle(points);

  if (degree < 1) {
    return;
  }
  sierpinski([points[0], getMid(points[0], points[1]), getMid(points[0], points[2])], degree-1);
  sierpinski([points[1], getMid(points[0], points[1]), getMid(points[1], points[2])], degree-1);
  sierpinski([points[2], getMid(points[2], points[1]), getMid(points[0], points[2])], degree-1);
}

c.beginPath();

sierpinski([[0, 400], [400, 400], [200, 0]], 5);

c.closePath();
