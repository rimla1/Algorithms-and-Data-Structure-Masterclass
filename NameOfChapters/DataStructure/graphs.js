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

  deleteEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
  }


  deleteVertex(vertex1){
    if(this.adjacencyList[vertex1]){
        delete this.adjacencyList[vertex1]
        for(let key in this.adjacencyList){
            this.adjacencyList[key] = this.adjacencyList[key].filter(vertex => vertex !== vertex1)
        }
    }
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
graph.deleteEdge("Belgrade", "Paris")
graph.getAdjacencyList()
graph.deleteVertex("Belgrade")
graph.getAdjacencyList()