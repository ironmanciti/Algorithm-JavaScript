//Graph Data Structure 를 canvas 를 이용하여 시각적으로 구현

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

const radius = 50;          //node 의 circle size

class Vertex {
  constructor(node_name, x, y){
    this.id = node_name;
    this.neighbors = {};
    this.x = x;                //x, y 좌표
    this.y = y;
  }
  draw(){
    c.beginPath();
    c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
    c.stroke();
    c.fillStyle = "black";
    c.font = "30px Georgia";
    c.fillText(this.id, this.x-5, this.y+5);    //circle 가운데에 node name 출력
    c.closePath();
  }
  draw_edges(){
    let edges = Object.values(this.neighbors);   //neighbor 의 [neighbor, weight] value
    for (let i = 0; i < edges.length; i++){
      c.strokeStyle = "black";
      c.beginPath();
      c.moveTo(this.x, this.y);                  //vertex 좌표
      c.lineTo(edges[i][0].x, edges[i][0].y);    //neighbor 좌표
      c.stroke();
      c.font = "30px Georgia";
      let posX, posY = null;
      if (this.x < edges[i][0].x){               //line 가운데 위치 계산
        posX = (edges[i][0].x - this.x) / 2 + this.x
      } else {
        posX = (this.x - edges[i][0].x) / 2 + edges[i][0].x
      }
      if (this.y < edges[i][0].y){
        posY = (edges[i][0].y - this.y) / 2 + this.y
      } else {
        posY = (this.y - edges[i][0].y) / 2 + edges[i][0].y
      }
      c.fillText(edges[i][1], posX, posY);      //weight 를 text 로 출력
      c.closePath();
    }
  }
  add_neighbor(neighbor, weight){              //vertex 에 neighbor 추가
    this.neighbors[neighbor.id] = [neighbor, weight];
  }
  get_id(){
    return this.id;
  }
}

class Graph {
  constructor(){
    this.vertices = {};                    //graph 구성 vertices
  }
  add_vertex(node){
    this.vertices[node.get_id()] = node;   //node 객체 추가
  }
  get_vertex(node_name){                  //node name 에 해당하는 Vertex 객체 반환
    if (node_name in this.vertices){
      return this.vertices[node_name];
    } else {
      return null;
    }
  }
  add_edge(frm, to, cost=0){              //graph 를 구성하는 vertex 간의 연결정보 구성
    if (!(frm in this.vertices)){
      add_vertex(new Vertex(frm));
    }
    if (!(to in this.vertices)){
      add_vertex(new Vertex(to));
    }
    this.vertices[frm].add_neighbor(this.vertices[to], cost);
    this.vertices[to].add_neighbor(this.vertices[frm], cost);
  }
  get_vertices(){
    return this.vertices;
  }
}

const dx = canvas.width / 5;       //canvas 상의 상대적 위치 설정
const dy = canvas.height / 5;

let g = new Graph()
g.add_vertex(new Vertex('a', 1 * dx, 3 * dy));
g.add_vertex(new Vertex('b', 3 * dx, 4 * dy));
g.add_vertex(new Vertex('c', 2 * dx, 2 * dy));
g.add_vertex(new Vertex('d', 4 * dx, 2.5 * dy));
g.add_vertex(new Vertex('e', 3 * dx, 1 * dy));
g.add_vertex(new Vertex('f', 1 * dx, 1 * dy));

g.add_edge('a','b',7);
g.add_edge('a','c',9);
g.add_edge('a','f',14);
g.add_edge('b','c',10);
g.add_edge('b','d',15);
g.add_edge('c','d',11);
g.add_edge('c','f',2);
g.add_edge('d','e',6);
g.add_edge('e','f',9);

let nodes = Object.values(g.get_vertices());   //graph 를 구성하는 vertex object 들을 array 로 반환
for (let i=0; i < nodes.length; i++){
  nodes[i].draw();                //circle  
  nodes[i].draw_edges();          //edge
}
