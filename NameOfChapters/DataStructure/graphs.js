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

  DFSrecursiveOuter(vertex){
    let visited = {}
    let result = []
    const DFSrecursiveIner = (vertex) => {
      if(!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      this.adjacencyList[vertex].forEach(neighbourVertex => {
        if(!visited[neighbourVertex]){
          DFSrecursiveIner(neighbourVertex)
        }
      });

    }
    DFSrecursiveIner(vertex)

    console.log(result)
    return result
  }

  DFSiterative(start){
    let stack = []
    let discovered = {}
    let result = []
    stack.push(start)
    while(stack.length !== 0){
      let vertex = stack.pop()
      if(!discovered[vertex]){
        result.push(vertex)
        discovered[vertex] = true
        this.adjacencyList[vertex].forEach(v => {
          stack.push(v)
        })
      }
    }
    console.log(result)
    return result

  }

}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.getAdjacencyList()
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
graph.getAdjacencyList()
graph.DFSrecursiveOuter("A")
graph.DFSiterative("A")
