class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2){
    if(vertex1 && vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
  }

  getAdjacencyList(){
    console.log(this.adjacencyList)
  }

}

const graph = new Graph()
graph.addVertex("Tokyo")
graph.addVertex("Paris")
graph.addVertex("Berlin")
graph.addVertex("Belgrade")
graph.getAdjacencyList()
graph.addEdge("Belgrade", "Berlin")
graph.addEdge("Belgrade", "Paris")
graph.addEdge("Paris", "Berlin")
graph.addEdge("Tokyo", "Berlin")
graph.addEdge("Tokyo", "Paris")
graph.getAdjacencyList()

