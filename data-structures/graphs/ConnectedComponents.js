const UNDIRECTED_GRAPH = require('./UndirectedGraph');

/**
 * @class ConnectedComponents
 * @description this class finds connected components in a graph. A connected component
 * is a set of vertices in a graph that have a path between every pair of node.
 * we use the id[] to store the componentID against each vertex which indicates
 * the component that the vertex belongs to. If 4 nodes have id = 0, that means
 * these 4 vertices are part of a connected component, and so on.
 *
 * ALGORITHM : execute DFS on each node and mark them visited. now for each neighbour of
 * a node, recursively execute DFS if they are not already marked. In the end. id[]
 * will have all the vertex marked with the id of components that they belong to.
 */
class ConnectedComponents {
	constructor(graph) {
		this.graph = graph;
		this.id = [];
		this.count = 0;
		this.visited = [];
		for (const v in [...Array(this.graph.V).keys()]) {
			this.visited.push(false);
		}
	}
    
	findConnectedComponents() {
		for (let v = 0; v < this.graph.V; v++) {
        	if (!this.visited[v]) {
        		this.dfs(this.graph, v);
        		this.count++;
			}
		}
	}

	dfs(graph, vertex) {
		this.visited[vertex] = true;
		this.id[vertex] = this.count;
		const neighbours = graph.getNeighbours(vertex);
		for (let w = 0; w < neighbours.length; w++) {
			if (!this.visited[neighbours[w]]) {
				this.dfs(graph, neighbours[w]);
			}
		}
	}
}

function main() {
	const graph = new UNDIRECTED_GRAPH(13);
	graph.addEdge(0, 1);
	graph.addEdge(0, 2);
	graph.addEdge(0, 5);
	graph.addEdge(0, 6);
	graph.addEdge(6, 4);
	graph.addEdge(4, 3);
	graph.addEdge(4, 5);
	graph.addEdge(3, 5);
	graph.addEdge(7, 8);
	graph.addEdge(9, 10);
	graph.addEdge(9, 11);
	graph.addEdge(9, 12);
	graph.addEdge(11, 12);
	
	const connectedComponents = new ConnectedComponents(graph);
	connectedComponents.findConnectedComponents();
	console.log('visited nodes ', connectedComponents.visited);
	console.log('connected components ', connectedComponents.id);
}

main();

module.exports = ConnectedComponents;
