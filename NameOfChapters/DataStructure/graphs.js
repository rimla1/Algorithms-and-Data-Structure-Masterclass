class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
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

