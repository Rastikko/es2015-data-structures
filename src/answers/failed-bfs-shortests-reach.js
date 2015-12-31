// This is a failed solution trying to apply a simple TreeNode structure base on
// http://www.timlabonne.com/2013/07/tree-traversals-with-javascript/

var _ = require('lodash');

var TreeNode = function (data) {
    this.parent = data.parent || null;
    this.children = data.children || [];
};
 
TreeNode.prototype.isLeaf = function () {
    return this.children.length == 0;
};
 
TreeNode.prototype.isRoot = function () {
    return this.parent == null;
};

function visitBfs(node) {
    var q = [node];
    var deep = 0;
    while (q.length > 0) {
        node = q.shift();
        node.distance = deep;
        //console.log("visited: ", node.value + 1);
        
        // Check if the node have children
        if (node.children.length > 0) {
            node.unvisitedChildren = node.children.length;
            deep++;
        }
        // increase the deep by 1 and track how many childrens they have
        _.each(node.children, function (child) {
            q.push(child);
        });
        
        //console.log("Unvisited children: ", node.unvisitedChildren);
         if (node.parent && node.parent.unvisitedChildren && node.unvisitedChildren === 0) {
            //console.log(node.parent.unvisitedChildren);
            // if we are in a children decrease the children iteration
            node.parent.unvisitedChildren--;
            // if is the last children decrease the deep
            if (node.parent.unvisitedChildren === 0) {
                deep--;
            }
        }
    }
}

function readLine(arr) {
    return arr.shift();
}

function readMappedLine(arr) {
    return readLine(arr).split(' ').map(Number);
}

function processData(input) {
    var lines = input.split("\n");
    var nCases = readLine(lines);
    for (var iCase = 0; iCase < nCases; iCase++) {
        var arr = readMappedLine(lines);
        var nNodes = arr[0];
        var nEdges = arr[1];
        var nodeArr = [];
        for (var iNode = 0; iNode < nNodes; iNode++) {
            var treeNode = new TreeNode({});
            treeNode.distance = 0;
            treeNode.value = iNode;
            treeNode.visited = false;
            nodeArr.push(treeNode);
        }
        for (var iEdge = 0; iEdge < nEdges; iEdge++) {
            var edgeArr = readMappedLine(lines);
            nodeArr[edgeArr[0] - 1].children.push(nodeArr[edgeArr[1] - 1]);
            nodeArr[edgeArr[1] - 1].parent = nodeArr[edgeArr[0] - 1];
        }
        var start = readLine(lines);
        visitBfs(nodeArr[start - 1]);
        
        var solutionArr = []
        _.each(nodeArr, function(node) {
            if (parseInt(node.value + 1) === parseInt(start)) {
                return;
            }
            if (node.distance === 0) {
                solutionArr.push(-1);
            } else {
                solutionArr.push(node.distance * 6);
            }
        });
        console.log(solutionArr.join(' '));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
