const DIRECTED_GRAPH = require('./DirectedGraph');
const Stack = require('./Stack');

/**
 * @class TopologicalSort
 * @description this class implements topological sort on a directed acyclic graph.
 * DAG -> directed graph with noe cycles.
 * The algorithm uses DFS on each vertex. When a vertex and its neighbours
 * are visted, this vertes is pushed to stack. In the end, the stack is
 * printed from top to bottom. This is the topological sort of the DAG.
 */
class TopologicalSort {
	constructor(graph) {
		this.graph = graph;
		this.stack = new Stack();
		this.visited = [];
		for (const v in [...Array(graph.V).keys()]) {
			this.visited.push(false);
		}
	}
	
	topologicalSort() {
	    for (let v = 0; v < this.graph.V; v++) {
	    	if (!this.visited[v]) {
	    		this.dfs(v);
			}
		}
	}
    
	dfs(vertex) {
	    this.visited[vertex] = true;
	    const neighbours = this.graph.getNeighbours(vertex);
	    for (let w = 0; w < neighbours.length; w++) {
	    	const neighbour = neighbours[w];
	    	if (!this.visited[neighbour]) {
	    		this.dfs(neighbour);
			}
		}
	    this.stack.push(vertex);
	}
}

function main() {
	const graph = new DIRECTED_GRAPH(6);
	graph.addEdge(5, 0);
	graph.addEdge(5, 2);
	graph.addEdge(4, 0);
	graph.addEdge(4, 1);
	graph.addEdge(2, 3);
	graph.addEdge(3, 1);
	const sort = new TopologicalSort(graph);
	sort.topologicalSort();
	console.log('result of topological sort: ', sort.stack.getStack().reverse());
}

main();
