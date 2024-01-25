class WeightedGraph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight: weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight: weight})
    }

    getAdjacencyList(){
        console.log(this.adjacencyList)
    }

}

let weightedGraph = new WeightedGraph()
weightedGraph.addVertex("A")
weightedGraph.addVertex("B")
weightedGraph.addEdge("A", "B", 5)
weightedGraph.addVertex("C")
weightedGraph.addEdge("B", "C", 2)
weightedGraph.getAdjacencyList()