import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeGenerator } from './tree components/tree-generator';
import { TreeNode } from './tree components/tree-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeGenerator: TreeGenerator = new TreeGenerator();

  @Input() tree: Array<TreeNode> = [new TreeNode('root', this.treeGenerator.generateTree(10, 8))];

  /*@Input() RenamedDFS = new EventEmitter();
  @Input() RenamedBFS = new EventEmitter();
  */
  onRenameDFS() {
    console.log("DFS");
    /*let queue: Array<TreeNode> = [this.tree[0]];
    let adj: Array<TreeNode> = [...this.tree[0].children];

    while (adj.length >0){
      for(let i = 0; i < adj.length; i++ ){
        queue.push(adj[i]);
      }
    }
    let currentNumber = 1;

    while (){
      queue.forEach(node => )
    }*/
  }
  
  onRenameBFS() {
    console.log("BFS");
  }
}


