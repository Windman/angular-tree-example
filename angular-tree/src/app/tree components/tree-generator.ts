import { TreeNode } from './tree-node'

export class TreeGenerator {
    constructor () {
    }

    generateTree (depth: number, maxWidth: number): Array<TreeNode> {
        if (depth === 0 ) {
          return [];
        }
    
        let result: Array<TreeNode> = [];
    
        for (let i = 0; i < Math.floor(Math.random() * maxWidth + 1); i++){
          let node = new TreeNode ('Node ' + Math.floor(Math.random() * 999  + 1), this.generateTree(depth - 1 , maxWidth));
          result.push(node);
        }
    
        return result;
      }
}