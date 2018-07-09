//Star 를 그리면서 star 의 line 끝에 또다른 star 를 그려나간다.
//canvas 에서 star 를 그리려면 다음과 같이 연결해야 한다.
// 0-3, 3-1, 1-4, 4-2, 2-0
//                  (4)
//
//        (3)
//
//                             (0)
//
//        (2)
//
//                  (1)

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

const alpha = (2 * Math.PI) / 5;  // 5각형이므로 360 도를 5 등분한 각의 sin, cos 값으로 각 꼭지점의 좌표를 구한다.
const r = 120;  //radius
//center of star
const x = 300;
const y = 300;

//helper function to draw line
function drawLine(fromX, fromY, toX, toY){
  c.moveTo(fromX, fromY);
  c.lineTo(toX, toY);
}

function star(x, y, r) {
  let verticesX = []  // star 의 각 꼭지점
  let verticesY = []
  if (r < 3) {        // star 의 반지름이 3 보다 작으면 recursive stop
    return;
  }
  for (let i = 0; i < 5; i++){     // x, y 를 기준으로 각 꼭지점의 x, y 좌표를 구한다.
    verticesX[i] = x + r * Math.cos(alpha * i);
    verticesY[i] = y + r * Math.sin(alpha * i);
  }

  drawLine(verticesX[0], verticesY[0], verticesX[3], verticesY[3])
  star(verticesX[3], verticesY[3], r/3);

  drawLine(verticesX[3], verticesY[3], verticesX[1], verticesY[1])
  star(verticesX[1], verticesY[1], r/3);

  drawLine(verticesX[1], verticesY[1], verticesX[4], verticesY[4])
  star(verticesX[4], verticesY[4], r/3);

  drawLine(verticesX[4], verticesY[4], verticesX[2], verticesY[2])
  star(verticesX[2], verticesY[2], r/3);

  drawLine(verticesX[2], verticesY[2], verticesX[0], verticesY[0])
  star(verticesX[0], verticesY[0], r/3);
  c.stroke();

}

c.beginPath()

star(x, y, r);

c.closePath()
