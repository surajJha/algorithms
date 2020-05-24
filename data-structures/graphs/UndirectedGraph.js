/**
 * Undirected Graph represented as Adjacency List
 */
class UndirectedGraph {
	constructor(V) {
		this.V = V;
		this.adjacencyList = [];
		for (let v = 0; v < V; v++) {
			this.adjacencyList[v] = [];
		}
	}

	addEdge(v, w) {
		this.adjacencyList[v].push(w);
		this.adjacencyList[w].push(v);
	}

	getNeighbours(v) {
		return this.adjacencyList[v];
	}
	
	findDegree(v) {
	    return this.adjacencyList[v].length;
	}

	findMaxDegree() {
	    let max = 0;
	    for (let v = 0; v < this.V; v++) {
	        if (this.adjacencyList[v].length > max) { max = this.adjacencyList[v].length; }
		}
	    return max;
	}
	
	findVertexWithMaxDegree() {
	    let vertex;
	    let max = 0;
	    for (let v = 0; v < this.V; v++) {
	        if (this.adjacencyList[v].length > max) {
	            max = this.adjacencyList[v].length;
	            vertex = v;
			}
		}
	    return vertex;
	}

	printGraph() {
		for (let v = 0; v < this.V; v++) {
		    for (let w = 0; w < this.adjacencyList[v].length; w++) {
				console.log(`${v} -> ${this.adjacencyList[v][w]}`);
			}
		}
	}
	
	printEdges(v) {
	    for (let w = 0; w < this.adjacencyList[v].length; w++) {
			console.log(`${v} -> ${this.adjacencyList[v][w]}`);
		}
	}
}

function main() {
	const graph = new UndirectedGraph(5);
	graph.addEdge(0, 1);
	graph.addEdge(0, 2);
	graph.addEdge(0, 4);
	graph.addEdge(1, 3);
	graph.addEdge(1, 4);
	graph.addEdge(2, 4);
    
	graph.printGraph();
	console.log('\n');
	graph.printEdges(4);
	console.log('\n');
	console.log('degree of vertex 2 ', graph.findDegree(2));
	console.log('\n');
	console.log('max degree ', graph.findMaxDegree());
	console.log('\n');
	console.log('vertex with max degree ', graph.findVertexWithMaxDegree());
}

// main();


module.exports = UndirectedGraph;
