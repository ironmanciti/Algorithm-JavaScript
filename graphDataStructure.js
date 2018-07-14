//Graph Data Structure 를 JavaScript 로 구현

class Vertex {
  constructor(node_name){
    this.id = node_name;
    this.neighbors = {};
  }
  add_neighbor(neighbor, weight){
    this.neighbors[neighbor] = weight;
  }
  get_connections(){
    return Object.keys(this.neighbors);
  }
  get_weight(neighbor){
    return this.neighbors[neighbor];
  }
  get_id(){
    return this.id;
  }
}

class Graph {
  constructor(){
    this.vertices = {};
  }
  add_vertex(node_name){
    this.vertices[node_name] = new Vertex(node_name);
  }
  get_vertex(node_name){
    if (node_name in this.vertices){
      return this.vertices[node_name];
    } else {
      return null;
    }
  }
  add_edge(frm, to, cost=0){
    if (!(frm in this.vertices)){
      add_vertex(frm);
    }
    if (!(to in this.vertices)){
      add_vertex(to);
    }
    this.vertices[frm].add_neighbor(to, cost);
    this.vertices[to].add_neighbor(frm, cost);
  }
  get_vertices(){
    return this.vertices;
  }
}

let g = new Graph()
g.add_vertex('a')
g.add_vertex('b')
g.add_vertex('c')
g.add_vertex('d')
g.add_vertex('e')
g.add_vertex('f')

g.add_edge('a','b',7)
g.add_edge('a','c',9)
g.add_edge('a','f',14)
g.add_edge('b','c',10)
g.add_edge('b','d',15)
g.add_edge('c','d',11)
g.add_edge('c','f',2)
g.add_edge('d','e',6)
g.add_edge('e','f',9)

let nodes = Object.values(g.get_vertices());
for (let i=0; i < nodes.length; i++){
  console.log(nodes[i].get_id()+' ==> '+nodes[i].get_connections());
}
