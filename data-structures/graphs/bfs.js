const UNDIRECTED_GRAPH = require('./UndirectedGraph');
const Queue = require('./Queue');

class BFS {
	constructor(graph) {
		this.graph = graph;
		this.visited = [];
		for (const v in [...Array(this.graph.V).keys()]) {
			this.visited.push(false);
		}
	}
	
	bfs(v) {
	    this.visited[v] = true;
	    const queue = new Queue();
	    queue.enqueue(v);
	    while (!queue.isEmpty()) {
	        const vertex = queue.dequeue();
	        const neighboursOfVertex = this.graph.getNeighbours(vertex);
	        for (let w = 0; w < neighboursOfVertex.length; w++) {
	            if (!this.visited[neighboursOfVertex[w]]) {
	                this.visited[neighboursOfVertex[w]] = true;
					queue.enqueue(neighboursOfVertex[w]);
				}
			}
		}
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
	const bfs = new BFS(graph);
	console.log('before bfs, visited array: ', bfs.visited);
	bfs.bfs(0);
	console.log('after bfs, visited array: ', bfs.visited);
}
main();
