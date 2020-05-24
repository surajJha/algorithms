const UNDIRECTED_GRAPH = require('./UndirectedGraph');

class DFS {
	constructor(graph) {
	    this.graph = graph;
		this.visited = [];
		this.edgeTo = [];
		this.sourceVertex = null;
		for (let v = 0; v < this.graph.V; v++) {
		    this.visited.push(false);
		    this.edgeTo.push(null);
		}
	}
	
	
	dfs(v) {
		this.visited[v] = true;
	    const neighbours = this.graph.getNeighbours(v);
	    for (let u = 0; u < neighbours.length; u++) {
	        if (!this.visited[neighbours[u]]) {
	            this.dfs(neighbours[u]);
	            this.edgeTo[neighbours[u]] = v;
			}
		}
	}
	
	hasPathTo(v) {
	    return this.visited[v];
	}

	pathTo(v) {
	    if (!this.hasPathTo(v)) { return null; }
	    const pathStack = [];
	    for (let u = v; u !== this.sourceVertex; u = this.edgeTo[u]) {
	        pathStack.push(u);
		}
	    pathStack.push(this.sourceVertex);
	    return pathStack;
	}
}

function main() {
	const graph = new UNDIRECTED_GRAPH(7);
	graph.addEdge(0, 1);
	graph.addEdge(0, 2);
	graph.addEdge(0, 5);
	graph.addEdge(0, 6);
	graph.addEdge(6, 4);
	graph.addEdge(4, 3);
	graph.addEdge(4, 5);
	graph.addEdge(3, 5);
	const dfs = new DFS(graph);
	graph.sourceVertex = 0;
	dfs.dfs(0);
	console.log(dfs.visited);
	console.log(dfs.edgeTo);
	console.log('path to 3 ', dfs.pathTo(3));
}

main();
