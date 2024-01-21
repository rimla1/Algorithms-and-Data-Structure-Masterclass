class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name){
    this.adjacencyList[name] = []
  }

  getAdjacencyList(){
    console.log(this.adjacencyList)
  }

}

const graph = new Graph()
graph.addVertex("Eclipse")
graph.addVertex("Dzungla")
graph.addVertex("Hrvati")
graph.getAdjacencyList()

