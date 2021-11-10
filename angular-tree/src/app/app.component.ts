import { Component, Input } from '@angular/core';
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

  onRenameBFS() {

    let unvisited: Array<TreeNode> = [];
    let currentNodeNumber: number = 1;
    let nextToVisit: Array<TreeNode> = [];

    this.tree.forEach(node => nextToVisit.push(node));
    
    while(nextToVisit.length > 0){
      for (let i = 0; i < nextToVisit.length; i++){
        nextToVisit[i].data = 'Node ' + currentNodeNumber.toString();
        currentNodeNumber++;
        if (nextToVisit[i].children.length > 0){
          nextToVisit[i].children.forEach(elem => unvisited.push(elem));
        }
      }
      
      nextToVisit = [];
      unvisited.forEach(node => nextToVisit.push(node));
      unvisited = [];
    }
  }
  
  onRenameDFS() {
    console.log("DFS");
  }
}


