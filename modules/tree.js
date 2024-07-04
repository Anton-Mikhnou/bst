import Node from "./Node";
import sortAndUniq from "./sortArray";

export default class Tree {
    
    constructor (array) {
        this.array = array;
        this.root = null;
    }

    buildTree(array) {

        if (array.length === 0) {
            return null;
        }

        let perfectArray = sortAndUniq(array);

        if (perfectArray.length === 1) {
            return new Node(perfectArray[0]);
        }

        let idx = Math.floor(perfectArray.length/2);
        
        let node = new Node(perfectArray[idx]);

        let arrayLeft = perfectArray.slice(0, idx);
        let arrayRight = perfectArray.slice(idx + 1, perfectArray.length);
        
        node.left = this.buildTree(arrayLeft);
        node.right = this.buildTree(arrayRight);

        return node;
    }

}